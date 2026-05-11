# n8n-nodes-apiconsultasdeveiculos

[![npm](https://img.shields.io/npm/v/n8n-nodes-apiconsultasdeveiculos)](https://www.npmjs.com/package/n8n-nodes-apiconsultasdeveiculos)
[![License](https://img.shields.io/npm/l/n8n-nodes-apiconsultasdeveiculos)](LICENSE.md)

n8n community node for the Datacube API ([consultasdeveiculos.com](https://www.consultasdeveiculos.com)).

Query vehicles, driver's licenses, records, credit, government agencies, and more directly in n8n workflows — with category and endpoint selection via dropdowns and automatically generated input fields.

---

## Installation

Follow the [official n8n community node installation guide](https://docs.n8n.io/integrations/community-nodes/installation/).

**Package name:** `n8n-nodes-apiconsultasdeveiculos`

---

## Credentials

1. Go to **Credentials → New → Consultas De Veículos API**
2. Paste your `auth_token` into the **API Token** field
3. Click **Test connection** — n8n will validate the token automatically

Don't know where to find your token? Log in to the [Datacube dashboard](https://www.consultasdeveiculos.com) and look under your account settings.

---

## Usage

1. Add the **Consultas de Veículos** node to your workflow
2. Select a **Category** (e.g. `Vehicles`, `Driver's License`, `Records`)
3. Select an **Endpoint** — the list is filtered automatically based on the chosen category
4. Fill in the fields that appear — they are generated according to the selected endpoint
5. Execute the workflow

The API response is returned as JSON in the node output.

---

## Available categories

| Category | Query examples |
|---|---|
| Vehicles — Information | Owner, liens, recall, Renajud, auction |
| Vehicles — Debts | IPVA and fines by state (all 26 states + DF) |
| Vehicles — Agencies | ANTT, DER, DETRAN, PRF, licensing |
| Vehicles — Documents | CRLVe issuance by state |
| Driver's License (CNH) | National and state-level queries |
| Records | CPF, CNPJ, phone, location, municipalities |
| Credit | Score, restrictions, bank debt |
| Agencies | SINTEGRA, NFe, SUFRAMA, Receita Federal, CNJ |
| Reclame Aqui | Companies, complaints, coupons |
| Account | API consumption and status |
| Async | Create and retrieve asynchronous tasks |

---

## Resources

- [Datacube API Documentation](https://www.consultasdeveiculos.com/documentation)
- [n8n Docs — Community nodes](https://docs.n8n.io/integrations/community-nodes/)
- [npm — n8n-nodes-apiconsultasdeveiculos](https://www.npmjs.com/package/n8n-nodes-apiconsultasdeveiculos)