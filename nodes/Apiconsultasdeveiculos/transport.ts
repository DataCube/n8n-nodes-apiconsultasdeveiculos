import { NodeApiError } from 'n8n-workflow';
import type { IDataObject, IExecuteFunctions, JsonObject } from 'n8n-workflow';

const BASE_URL = 'https://api.consultasdeveiculos.com';

export async function apiRequest(
	context: IExecuteFunctions,
	path: string,
	body: IDataObject,
): Promise<IDataObject> {
	const credentials = await context.getCredentials('apiconsultasdeveiculosApi');

	const formBody = new URLSearchParams({
		auth_token: credentials.apiToken as string,
		...Object.fromEntries(Object.entries(body).map(([k, v]) => [k, String(v)])),
	});

	try {
		const response = await context.helpers.httpRequest({
			method: 'POST',
			url: `${BASE_URL}${path}`,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: formBody.toString(),
		});

		return response as IDataObject;
	} catch (error) {
		throw new NodeApiError(context.getNode(), error as JsonObject);
	}
}
