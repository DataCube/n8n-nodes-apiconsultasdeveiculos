import {
	NodeConnectionTypes,
	NodeOperationError,
	type IExecuteFunctions,
	type ILoadOptionsFunctions,
	type INodePropertyOptions,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';

import { ENDPOINTS } from './endpoints';
import { buildProperties } from './properties';
import { apiRequest } from './transport';

export class Apiconsultasdeveiculos implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Consultas de Veículos',
		name: 'apiconsultasdeveiculos',
		icon: { light: 'file:apiconsultasdeveiculos.svg', dark: 'file:apiconsultasdeveiculos.dark.svg' },
		group: ['transform'],
		version: 1,
		description: 'Consulta veículos, CNH, cadastros e muito mais via API DataCube',
		defaults: { name: 'Consultas de Veículos' },
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'apiconsultasdeveiculosApi', required: true }],
		usableAsTool: true,
		properties: buildProperties(),
	};

	methods = {
		loadOptions: {
			async getEndpoints(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const category = this.getCurrentNodeParameter('category') as string;
				return (
					ENDPOINTS[category]?.map((e) => ({
						name: e.name,
						value: e.value,
						description: e.description,
					})) ?? []
				);
			},
		},
	};

	async execute(this: IExecuteFunctions) {
		const items = this.getInputData();
		const returnData = [];

		for (let i = 0; i < items.length; i++) {
			try {
				const category = this.getNodeParameter('category', i) as string;
				const endpointValue = this.getNodeParameter('endpoint', i) as string;

				const endpointDef = ENDPOINTS[category]?.find((e) => e.value === endpointValue);
				if (!endpointDef) {
					throw new NodeOperationError(this.getNode(), `Endpoint não encontrado: ${endpointValue}`, { itemIndex: i });
				}

				const body: Record<string, string> = {};
				for (const param of endpointDef.params) {
					const val = this.getNodeParameter(`param_${param.name}`, i, '') as string;
					if (val !== '') body[param.name] = val;
				}

				const response = await apiRequest(this, endpointDef.path, body);
				returnData.push({ json: response, pairedItem: { item: i } });
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: (error as Error).message }, pairedItem: { item: i } });
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
