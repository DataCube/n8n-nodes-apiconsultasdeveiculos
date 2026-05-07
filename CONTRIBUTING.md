# Contribuindo

## Arquitetura do projeto

A API da Datacube tem 176 endpoints distribuídos em 17 categorias. A principal decisão de design foi **não escrever os endpoints à mão**: eles são gerados automaticamente a partir da collection Postman oficial e recompilados sempre que a API atualiza.

```
scripts/
  postman_datacube.json       ← collection Postman (source of truth da API)
  postman-to-n8n.js           ← converte o Postman em endpoints.ts

credentials/
  ApiconsultasdeveiculosApi.credentials.ts

nodes/Apiconsultasdeveiculos/
  endpoints.ts                ← AUTO-GERADO — nunca editar manualmente
  properties.ts               ← transforma endpoints.ts em campos visuais do n8n
  transport.ts                ← faz as requisições HTTP para a API
  Apiconsultasdeveiculos.node.ts   ← entry point
```

### `scripts/postman-to-n8n.js`

Lê o `postman_datacube.json` e gera o `endpoints.ts`. O que ele faz:

- Percorre recursivamente as pastas da collection (categorias e subcategorias)
- Para cada endpoint, extrai nome, path e parâmetros do body
- Filtra o `auth_token` (que vai nas credenciais, não nos campos do node)
- Detecta parâmetros opcionais pelo campo `disabled: true` do Postman
- Gera slugs únicos para cada endpoint
- Escreve o `endpoints.ts`

### `endpoints.ts`

**AUTO-GERADO. Nunca editar manualmente.**

```typescript
export const ENDPOINTS: Record<string, EndpointDefinition[]> = {
  'Veículos': [
    {
      name: 'Proprietário Atual',
      value: 'veiculos_proprietario_atual',
      path: '/veiculos/proprietario-atual',
      params: [
        { name: 'placa', displayName: 'Placa', type: 'string', required: true },
      ],
    },
  ],
};

export const CATEGORIES = [
  { name: 'Veículos', value: 'Veículos' },
  // ...
];
```

### `properties.ts`

Transforma o `ENDPOINTS` em `INodeProperties[]`. Gera:

1. **Dropdown de Categoria** — lista estática das 17 categorias
2. **Dropdown de Endpoint** — carregado dinamicamente via `loadOptionsMethod: 'getEndpoints'`
3. **Campos dos parâmetros** — um por parâmetro, com `displayOptions` que mostra o campo apenas quando o endpoint correspondente está selecionado

Os campos levam o prefixo `param_` para evitar colisão com campos internos do node.

### `transport.ts`

Toda comunicação HTTP passa por aqui. O node nunca faz chamadas diretamente.

- Busca as credenciais do cofre do n8n
- Monta o body como `application/x-www-form-urlencoded` com `auth_token` + parâmetros
- Faz o POST para `https://api.consultasdeveiculos.com{path}`
- Em erros HTTP (4xx/5xx), lança `NodeApiError` com a mensagem real da API

### `Apiconsultasdeveiculos.node.ts`

Entry point. Orquestra os demais módulos:

- **`description`** — metadados e `properties: buildProperties()`
- **`methods.loadOptions.getEndpoints`** — retorna endpoints filtrados pela categoria
- **`execute`** — coleta parâmetros, chama `apiRequest`, retorna JSON; implementa `continueOnFail()` para não travar o workflow em caso de erro em um item

---

## Fluxo de uma execução

```
Usuário seleciona Categoria → Endpoint → preenche campos
         ↓
Apiconsultasdeveiculos.node.ts (execute)
  → lê parâmetros
  → busca definição do endpoint em ENDPOINTS
  → chama apiRequest(this, path, body)
         ↓
transport.ts
  → busca credenciais
  → monta URLSearchParams
  → POST https://api.consultasdeveiculos.com{path}
  → retorna JSON (ou lança NodeApiError)
         ↓
node.ts → empurra { json: response } para o output
```

---

## Scripts

```bash
node scripts/postman-to-n8n.js   # regenera endpoints.ts
npm run build                     # compila TypeScript
npm run build:watch               # watch mode
npm run lint                      # ESLint
npm run lint:fix                  # ESLint com autofix
```

## Testando localmente

```bash
npm run build
npm link
cd ~/.n8n/custom && npm link n8n-nodes-apiconsultasdeveiculos
n8n start
```

## Publicando

```bash
npm run release   # bump de versão + tag + push → CI publica no npm automaticamente
```