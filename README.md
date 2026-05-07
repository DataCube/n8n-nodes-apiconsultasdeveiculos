# n8n-nodes-apiconsultasdeveiculos

[![npm](https://img.shields.io/npm/v/n8n-nodes-apiconsultasdeveiculos)](https://www.npmjs.com/package/n8n-nodes-apiconsultasdeveiculos)
[![License](https://img.shields.io/npm/l/n8n-nodes-apiconsultasdeveiculos)](LICENSE.md)

Node comunitário do n8n para a API da Datacube ([consultasdeveiculos.com](https://www.consultasdeveiculos.com)).

Consulte veículos, CNH, cadastros, crédito, órgãos e muito mais diretamente em workflows do n8n — com seleção de categoria e endpoint via dropdowns e campos gerados automaticamente.

---

## Instalação

Siga o [guia oficial de instalação de nodes comunitários](https://docs.n8n.io/integrations/community-nodes/installation/) do n8n.

**Nome do pacote:** `n8n-nodes-apiconsultasdeveiculos`

---

## Credenciais

1. Acesse **Credentials → New → Consultas De Veículos API**
2. Cole o seu `auth_token` no campo **API Token**
3. Clique em **Test connection** — o n8n validará o token automaticamente

Não sabe onde encontrar seu token? Acesse o painel da [Datacube](https://www.consultasdeveiculos.com) e localize nas configurações da sua conta.

---

## Como usar

1. Adicione o node **Consultas de Veículos** ao seu workflow
2. Selecione a **Categoria** (ex: `Veículos`, `CNH`, `Cadastros`)
3. Selecione o **Endpoint** — a lista é filtrada automaticamente pela categoria escolhida
4. Preencha os campos que aparecem — eles são gerados de acordo com o endpoint selecionado
5. Execute o workflow

A resposta da API retorna como JSON no output do node.

---

## Categorias disponíveis

| Categoria | Exemplos de consulta |
|---|---|
| Veículos — Informações | Proprietário, gravames, recall, renajud, leilão |
| Veículos — Débitos | IPVA e multas por estado (todos os 26 estados + DF) |
| Veículos — Órgãos | ANTT, DER, DETRAN, PRF, licenciamento |
| Veículos — Documentos | Emissão de CRLVe por estado |
| CNH | Consulta nacional e por estado |
| Cadastros | CPF, CNPJ, telefone, localização, municípios |
| Crédito | Score, restrições, endividamento bancário |
| Órgãos | SINTEGRA, NFe, SUFRAMA, Receita Federal, CNJ |
| Reclame Aqui | Empresas, reclamações, cupons |
| Conta | Consumo e status da API |
| Assíncrono | Criação e consulta de tarefas assíncronas |

---

## Atualizando os endpoints

Quando a Datacube adicionar ou alterar endpoints:

1. Substitua `scripts/postman_datacube.json` pela collection Postman atualizada
2. Rode `node scripts/postman-to-n8n.js`
3. Rode `npm run build`
4. Publique uma nova versão com `npm run release`

Nenhum outro arquivo precisa ser editado.
 
---

## Recursos

- [Documentação da API Datacube](https://www.consultasdeveiculos.com/documentation)
- [Docs n8n — Community nodes](https://docs.n8n.io/integrations/community-nodes/)
- [npm — n8n-nodes-apiconsultasdeveiculos](https://www.npmjs.com/package/n8n-nodes-apiconsultasdeveiculos)