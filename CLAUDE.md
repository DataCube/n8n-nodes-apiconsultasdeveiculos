# n8n-nodes-apiconsultasdeveiculos

Community node n8n para a API da Datacube (consultasdeveiculos.com).

## Contexto do projeto

A Datacube expõe uma API REST com **176 endpoints em 17 categorias** (veículos, CNH, cadastros, crédito, órgãos, etc.). Todos os endpoints usam `POST` com body `application/x-www-form-urlencoded`.

A ideia do node é: o usuário seleciona a **categoria** → seleciona o **endpoint** → os campos necessários aparecem automaticamente no painel do n8n.

A collection completa da API está exportada em `scripts/postman_datacube.json`. O script `scripts/postman-to-n8n.js` converte essa collection para o `nodes/Apiconsultasdeveiculos/endpoints.ts`. Sempre que a API atualizar, basta rodar o script novamente.

---

## Estrutura de pastas

```
n8n-nodes-apiconsultasdeveiculos/
│
├── scripts/
│   ├── postman_datacube.json        ← collection Postman da API (source of truth)
│   └── postman-to-n8n.js            ← converte a collection para endpoints.ts
│
├── credentials/
│   └── ApiconsultasdeveiculosApi.credentials.ts
│
├── nodes/
│   └── Apiconsultasdeveiculos/
│       ├── Apiconsultasdeveiculos.node.ts   ← entry point, lógica central
│       ├── endpoints.ts                      ← AUTO-GERADO pelo script (não editar à mão)
│       ├── properties.ts                     ← transforma endpoints.ts em INodeProperties[]
│       ├── transport.ts                      ← faz os requests HTTP para a API
│       ├── apiconsultasdeveiculos.svg
│       └── apiconsultasdeveiculos.dark.svg
│
├── .github/
│   └── workflows/
│       └── publish.yml     ← publica no npm com provenance (obrigatório para verificação)
│
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── README.md
```

---

## Arquitetura

### `endpoints.ts` (AUTO-GERADO)

Mapa de todos os endpoints gerado a partir do Postman. **Nunca editar manualmente** — sempre regenerar via script.

```typescript
export interface EndpointParam {
  name: string;          // key do body (ex: "placa")
  displayName: string;   // label no n8n (ex: "Placa")
  type: 'string' | 'number' | 'boolean';
  required: boolean;
  placeholder?: string;
  description?: string;
}

export interface EndpointDefinition {
  name: string;    // nome legível (ex: "Proprietário Atual")
  value: string;   // slug único (ex: "veiculos_informacoes_consulta_nacional_proprietario_atual")
  path: string;    // path da API (ex: "/veiculos/proprietario-atual")
  description?: string;
  params: EndpointParam[];
}

export const ENDPOINTS: Record<string, EndpointDefinition[]> = {
  'Veículos > Informações': [ ... ],
  'Veículos > Débitos': [ ... ],
  'CNH': [ ... ],
  // 17 categorias no total
};

export const CATEGORIES = [
  { name: 'Conta', value: 'Conta' },
  { name: 'Veículos > Informações', value: 'Veículos > Informações' },
  // ...
];
```

### `properties.ts`

Gera `INodeProperties[]` dinamicamente a partir do `ENDPOINTS`. Responsável pela lógica de `displayOptions` — cada campo só aparece quando o endpoint correspondente está selecionado.

```typescript
import { INodeProperties } from 'n8n-workflow';
import { ENDPOINTS, CATEGORIES } from './endpoints';

export function buildProperties(): INodeProperties[] {
  const properties: INodeProperties[] = [];

  // 1. Dropdown de categoria
  properties.push({
    displayName: 'Categoria',
    name: 'category',
    type: 'options',
    options: CATEGORIES,
    default: '',
  });

  // 2. Dropdown de endpoint (filtrado por categoria via loadOptionsMethod)
  properties.push({
    displayName: 'Endpoint',
    name: 'endpoint',
    type: 'options',
    typeOptions: { loadOptionsMethod: 'getEndpoints' },
    default: '',
    displayOptions: { show: { category: CATEGORIES.map(c => c.value) } },
  });

  // 3. Para cada endpoint, gera seus campos com displayOptions
  for (const [, endpoints] of Object.entries(ENDPOINTS)) {
    for (const ep of endpoints) {
      for (const param of ep.params) {
        properties.push({
          displayName: param.displayName,
          name: `param_${param.name}`,  // prefixo para evitar colisão
          type: param.type,
          default: '',
          required: param.required,
          placeholder: param.placeholder,
          description: param.description,
          displayOptions: {
            show: { endpoint: [ep.value] },
          },
        });
      }
    }
  }

  return properties;
}
```

### `transport.ts`

Toda a lógica HTTP fica aqui. O node nunca faz fetch diretamente.

```typescript
import { IExecuteFunctions, IDataObject } from 'n8n-workflow';

const BASE_URL = 'https://api.consultasdeveiculos.com';

export async function apiRequest(
  context: IExecuteFunctions,
  path: string,
  body: IDataObject,
): Promise<IDataObject> {
  const credentials = await context.getCredentials('apiconsultasdeveiculosApi');

  const formBody = new URLSearchParams({
    auth_token: credentials.apiToken as string,
    ...Object.fromEntries(
      Object.entries(body).map(([k, v]) => [k, String(v)])
    ),
  });

  const response = await context.helpers.request({
    method: 'POST',
    url: `${BASE_URL}${path}`,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formBody.toString(),
    json: true,
  });

  return response as IDataObject;
}
```

### `Apiconsultasdeveiculos.node.ts`

Entry point limpo. Importa tudo dos outros módulos.

```typescript
import { IExecuteFunctions, INodeType, INodeTypeDescription, ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
import { buildProperties } from './properties';
import { apiRequest } from './transport';
import { ENDPOINTS } from './endpoints';

export class Apiconsultasdeveiculos implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Consultas de Veículos',
    name: 'apiconsultasdeveiculos',
    icon: 'file:apiconsultasdeveiculos.svg',
    group: ['transform'],
    version: 1,
    description: 'Consulta veículos, CNH, cadastros e muito mais via API Datacube',
    defaults: { name: 'Consultas de Veículos' },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [{ name: 'apiconsultasdeveiculosApi', required: true }],
    properties: buildProperties(),
  };

  methods = {
    loadOptions: {
      async getEndpoints(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
        const category = this.getCurrentNodeParameter('category') as string;
        return ENDPOINTS[category]?.map(e => ({
          name: e.name,
          value: e.value,
          description: e.description,
        })) ?? [];
      },
    },
  };

  async execute(this: IExecuteFunctions) {
    const items = this.getInputData();
    const returnData = [];

    for (let i = 0; i < items.length; i++) {
      const endpointValue = this.getNodeParameter('endpoint', i) as string;
      const category = this.getNodeParameter('category', i) as string;

      const endpointDef = ENDPOINTS[category]?.find(e => e.value === endpointValue);
      if (!endpointDef) throw new Error(`Endpoint não encontrado: ${endpointValue}`);

      // Coleta os params preenchidos pelo usuário
      const body: Record<string, string> = {};
      for (const param of endpointDef.params) {
        const val = this.getNodeParameter(`param_${param.name}`, i, '') as string;
        if (val !== '') body[param.name] = val;
      }

      const response = await apiRequest(this, endpointDef.path, body);
      returnData.push({ json: response });
    }

    return [returnData];
  }
}
```

### `ApiconsultasdeveiculosApi.credentials.ts`

```typescript
import { ICredentialType, INodeProperties } from 'n8n-workflow';

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
      default: '',
      required: true,
    },
  ];
}
```

---

## Scripts úteis

```bash
# Regenerar endpoints.ts a partir do Postman atualizado
node scripts/postman-to-n8n.js

# Desenvolvimento
npm run build   # compila TypeScript
npm run dev     # watch mode
npm run lint    # ESLint
npm run lintfix # ESLint com autofix

# Testar localmente
npm link
cd ~/.n8n/custom && npm link n8n-nodes-apiconsultasdeveiculos
n8n start
```

---

## Publicação no npm (com provenance — obrigatório para verificação)

A partir de maio/2026, nodes verificados precisam ser publicados via GitHub Actions com provenance statement. Publicação local não é aceita pelo Creator Portal.

O workflow `.github/workflows/publish.yml` deve:
1. Ter permissão `id-token: write`
2. Usar `npm publish --provenance --access public`
3. Ser configurado como Trusted Publisher no npmjs.com (sem NPM_TOKEN permanente)

Disparar com: `git tag v1.0.0 && git push origin v1.0.0`

---

## Pendências / próximos passos

- [ ] Marcar params obrigatórios como `required: true` no `endpoints.ts` (atualmente tudo `false` pois o Postman não tem essa info)
- [ ] Tipar params numéricos (`timeout`, `page`, etc.) como `type: 'number'` no script
- [ ] Tratar params aninhados como `veiculo[placa]`, `comprador[endereco][cep]` (endpoint Comunicado de Venda) — provavelmente via `fixedCollection`
- [ ] Implementar o `publish.yml` com provenance
- [ ] Escrever README voltado para o usuário final do node
- [ ] Testar localmente linkando o pacote no n8n

---

## Referências

- [Docs n8n — Building community nodes](https://docs.n8n.io/integrations/community-nodes/build-community-nodes/)
- [Docs n8n — Submit community nodes](https://docs.n8n.io/integrations/creating-nodes/deploy/submit-community-nodes/)
- [Documentação da API](https://www.consultasdeveiculos.com/documentation)
- [npm — Generating provenance statements](https://docs.npmjs.com/generating-provenance-statements)