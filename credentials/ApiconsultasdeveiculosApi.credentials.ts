/* eslint-disable */
import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class ApiconsultasdeveiculosApi implements ICredentialType {
	name = 'apiconsultasdeveiculosApi';

	displayName = 'Consultas de Veículos API';

	documentationUrl = 'https://www.consultasdeveiculos.com/documentation';

	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			body: {
				auth_token: '={{$credentials.apiToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.consultasdeveiculos.com',
			url: '/conta/erros',
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		},
	};
}
