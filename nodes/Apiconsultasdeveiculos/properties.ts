import type { INodeProperties } from 'n8n-workflow';
import { CATEGORIES, ENDPOINTS } from './endpoints';

const TYPE_DEFAULTS: Record<string, string | number | boolean> = {
	string: '',
	number: 0,
	boolean: false,
};

export function buildProperties(): INodeProperties[] {
	const properties: INodeProperties[] = [];

	properties.push({
		displayName: 'Category',
		name: 'category',
		type: 'options',
		noDataExpression: true,
		options: CATEGORIES,
		default: '',
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	});

	properties.push({
		displayName: 'Endpoint Name or ID',
		name: 'endpoint',
		type: 'options',
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		noDataExpression: true,
		typeOptions: { loadOptionsMethod: 'getEndpoints', loadOptionsDependsOn: ['category'] },
		default: '',
		displayOptions: { show: { category: CATEGORIES.map((c) => c.value) } },
	});

	for (const endpoints of Object.values(ENDPOINTS)) {
		for (const ep of endpoints) {
			for (const param of ep.params) {
				const prop: INodeProperties = {
					displayName: param.displayName,
					name: `param_${param.name}`,
					type: param.type,
					default: TYPE_DEFAULTS[param.type] ?? '',
					required: param.required,
					displayOptions: { show: { endpoint: [ep.value] } },
				};

				if (param.placeholder) prop.placeholder = param.placeholder;
				if (param.description) prop.description = param.description;

				properties.push(prop);
			}
		}
	}

	return properties;
}