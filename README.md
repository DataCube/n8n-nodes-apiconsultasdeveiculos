# n8n-nodes-apiconsultasdeveiculos

Node comunitário do n8n para a API da Datacube ([consultasdeveiculos.com](https://www.consultasdeveiculos.com)).

Permite consultar veículos, CNH, cadastros, crédito, órgãos e muito mais diretamente em workflows do n8n, com seleção de categoria e endpoint via dropdowns e campos gerados automaticamente.

---

## Instalação

Siga o [guia de instalação de nodes comunitários](https://docs.n8n.io/integrations/community-nodes/installation/) da documentação do n8n.

**Nome do pacote:** `n8n-nodes-apiconsultasdeveiculos`

---

## Credenciais

1. Acesse **Credentials → New → Consultas De Veículos API**
2. Cole o seu `auth_token` no campo **API Token**
3. Clique em **Test connection** — o n8n fará uma chamada ao endpoint `/conta/erros` para validar o token

O token é enviado no body de cada requisição como `auth_token=<valor>`, conforme exigido pela API.

---

## Como usar o node

1. Adicione o node **Consultas de Veículos** ao workflow
2. Selecione a **Categoria** (ex: `Veículos`, `CNH`, `Cadastros`)
3. Selecione o **Endpoint** — a lista é filtrada pela categoria escolhida
4. Preencha os campos que aparecem — eles são gerados automaticamente de acordo com o endpoint selecionado
5. Execute o workflow

A resposta da API aparece como JSON no output do node.

---

## Arquitetura do projeto

A API da Datacube tem 176 endpoints distribuídos em 17 categorias. A principal decisão de design foi **não escrever os endpoints à mão**: eles são gerados automaticamente a partir da collection Postman oficial e recompilados sempre que a API atualiza.

```
scripts/
  postman_datacube.json       ← collection Postman (source of truth da API)
  postman-to-n8n.js           ← script de conversão: lê o Postman e gera endpoints.ts

credentials/
  ApiconsultasdeveiculosApi.credentials.ts   ← define o campo API Token no n8n

nodes/Apiconsultasdeveiculos/
  endpoints.ts                ← AUTO-GERADO — mapa completo de categorias e endpoints
  properties.ts               ← transforma endpoints.ts em campos visuais do n8n
  transport.ts                ← faz as requisições HTTP para a API
  Apiconsultasdeveiculos.node.ts   ← entry point: orquestra tudo
```

### `scripts/postman_datacube.json`

Collection Postman exportada da API da Datacube. É o **ponto de verdade** de todos os endpoints: nomes, paths, parâmetros e exemplos. Não editar manualmente — baixar sempre da fonte oficial.

### `scripts/postman-to-n8n.js`

Script Node.js que lê o `postman_datacube.json` e gera o `endpoints.ts`. Roda com:

```bash
node scripts/postman-to-n8n.js
```

O que ele faz:
- Percorre recursivamente as pastas da collection (categorias e subcategorias)
- Para cada endpoint, extrai nome, path e parâmetros do body
- Filtra o `auth_token` (que vai nas credenciais, não nos campos do node)
- Detecta parâmetros opcionais pelo campo `disabled: true` do Postman
- Gera slugs únicos para cada endpoint (usados internamente pelo n8n)
- Escreve o arquivo `nodes/Apiconsultasdeveiculos/endpoints.ts`

**Quando rodar:** sempre que a collection Postman for atualizada.

### `nodes/Apiconsultasdeveiculos/endpoints.ts`

**Arquivo AUTO-GERADO. Nunca editar manualmente.**

Exporta duas estruturas:

```typescript
// Mapa de categorias → lista de endpoints
export const ENDPOINTS: Record<string, EndpointDefinition[]> = {
  'Veículos': [
    {
      name: 'Proprietário Atual',
      value: 'veiculos_proprietario_atual',  // slug único
      path: '/veiculos/proprietario-atual',
      params: [
        { name: 'placa', displayName: 'Placa', type: 'string', required: true, placeholder: 'ABC1234' },
      ],
    },
    // ...
  ],
  // ...
};

// Lista de categorias para o dropdown
export const CATEGORIES = [
  { name: 'Veículos', value: 'Veículos' },
  // ...
];
```

### `nodes/Apiconsultasdeveiculos/properties.ts`

Transforma o `ENDPOINTS` em `INodeProperties[]` — a estrutura que o n8n usa para renderizar campos no painel visual.

O que ele gera:
1. **Dropdown de Categoria** — lista estática das 17 categorias
2. **Dropdown de Endpoint** — carregado dinamicamente via `loadOptionsMethod: 'getEndpoints'`; recarrega e limpa automaticamente quando a categoria muda (`loadOptionsDependsOn: ['category']`)
3. **Campos dos parâmetros** — um campo por parâmetro de cada endpoint, com `displayOptions` que faz o campo aparecer apenas quando o endpoint correspondente está selecionado

Os nomes dos campos de parâmetro levam o prefixo `param_` (ex: `param_placa`) para evitar colisão com campos internos do node.

### `nodes/Apiconsultasdeveiculos/transport.ts`

Responsável por toda a comunicação HTTP com a API. O node nunca faz chamadas diretamente — sempre passa por aqui.

O que ele faz:
- Busca as credenciais (`apiToken`) do cofre do n8n
- Monta o body como `application/x-www-form-urlencoded` com `auth_token` + parâmetros do usuário
- Faz o POST para `https://api.consultasdeveiculos.com{path}`
- Em caso de erro HTTP (4xx/5xx), lança `NodeApiError` com o body de resposta da API, exibindo a mensagem real do erro no n8n

### `nodes/Apiconsultasdeveiculos/Apiconsultasdeveiculos.node.ts`

Entry point do node. Orquestra os demais módulos:

- **`description`** — metadados do node (nome, ícone, versão) e `properties: buildProperties()` que carrega os campos
- **`methods.loadOptions.getEndpoints`** — chamado pelo n8n quando o usuário abre o dropdown de Endpoint; retorna a lista filtrada pela categoria selecionada
- **`execute`** — roda para cada item de entrada: lê categoria e endpoint selecionados, coleta os parâmetros preenchidos, chama `apiRequest` e retorna o JSON da API; implementa `continueOnFail()` para que erros em um item não travem o processamento dos demais

### `credentials/ApiconsultasdeveiculosApi.credentials.ts`

Define o formulário de credenciais no n8n (campo **API Token**) e duas configurações:

- **`authenticate`** — diz ao n8n como injetar o token (no body como `auth_token`) ao testar a credencial
- **`test`** — endpoint usado para validar o token: `POST /conta/erros` (lista de códigos de erro da conta; requer autenticação e não precisa de parâmetros extras)

---

## Fluxo completo de uma execução

```
Usuário seleciona Categoria → Endpoint → preenche campos
         ↓
Apiconsultasdeveiculos.node.ts (execute)
  → lê parâmetros do item de entrada
  → busca a definição do endpoint em ENDPOINTS
  → chama apiRequest(this, path, body)
         ↓
transport.ts (apiRequest)
  → busca credenciais do cofre do n8n
  → monta URLSearchParams com auth_token + params
  → POST https://api.consultasdeveiculos.com{path}
  → retorna JSON da resposta (ou lança NodeApiError)
         ↓
Apiconsultasdeveiculos.node.ts
  → empurra { json: response } para o output do node
```

---

## Atualizando a API

Quando a Datacube publicar novos endpoints ou alterar os existentes:

1. Baixe a collection Postman atualizada e substitua `scripts/postman_datacube.json`
2. Rode `node scripts/postman-to-n8n.js` — o `endpoints.ts` será regenerado
3. Rode `npm run build`
4. Teste localmente e publique uma nova versão

Nenhum outro arquivo precisa ser editado para adicionar endpoints.

---

## Scripts

```bash
node scripts/postman-to-n8n.js   # regenera endpoints.ts a partir do Postman
npm run build                     # compila TypeScript → dist/
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

---

## Recursos

- [Documentação da API Datacube](https://www.consultasdeveiculos.com/documentation)
- [Docs n8n — Community nodes](https://docs.n8n.io/integrations/community-nodes/)
- [Docs n8n — Building nodes](https://docs.n8n.io/integrations/creating-nodes/build/)
