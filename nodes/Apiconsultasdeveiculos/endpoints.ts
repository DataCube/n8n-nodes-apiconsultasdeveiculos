/* eslint-disable */
// AUTO-GENERATED from Consultas - V2.10.2.73
// Generator: postman-to-n8n.js
// Total: 176 endpoints across 17 categories

export interface EndpointParam {
  name: string;
  displayName: string;
  type: 'string' | 'number' | 'boolean';
  required: boolean;
  placeholder?: string;
  description?: string;
}

export interface EndpointDefinition {
  name: string;
  value: string;
  path: string;
  description?: string;
  params: EndpointParam[];
}

export const ENDPOINTS: Record<string, EndpointDefinition[]> = {
  Conta: [
    {
      name: "Consumption information",
      value: "conta_informacoes_de_consumo",
      path: "/conta/consultas",
      description: "Account Consumption Inquiry",
      params: [
        {
          name: "de",
          displayName: "From",
          type: "string",
          required: true,
          placeholder: "2019-11-28"
        },
        {
          name: "ate",
          displayName: "To",
          type: "string",
          required: true,
          placeholder: "2019-11-29"
        }
      ]
    },
    {
      name: "API error code information",
      value: "conta_informacoes_de_codigos_de_erros_da_api",
      path: "/conta/erros",
      description: "Endpoint Status Query",
      params: []
    },
    {
      name: "API status information",
      value: "conta_informacoes_de_status_da_api",
      path: "/api/status",
      description: "",
      params: []
    }
  ],
  "Assíncrono": [
    {
      name: "Create an asynchronous task",
      value: "assincrono_criar_tarefa_assincrona",
      path: "/async/create-task",
      description: "Create Task",
      params: [
        {
          name: "endpoint",
          displayName: "Endpoint",
          type: "string",
          required: true,
          placeholder: "/people/name"
        },
        {
          name: "timeout",
          displayName: "Timeout",
          type: "string",
          required: true,
          placeholder: "259200"
        },
        {
          name: "max_tries",
          displayName: "Max Tries",
          type: "string",
          required: true,
          placeholder: "144"
        },
        {
          name: "inputs[cpf]",
          displayName: "CPF Inputs",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "notification_url",
          displayName: "Notification URL",
          type: "string",
          required: true,
          placeholder: "https://example.com/webhook"
        }
      ]
    },
    {
      name: "Search for an asynchronous task",
      value: "assincrono_buscar_tarefa_assincrona",
      path: "/api/get-task",
      description: "Get Task",
      params: [
        {
          name: "request_uid",
          displayName: "Request UID",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXX"
        }
      ]
    },
    {
      name: "Retrieve an asynchronous task",
      value: "assincrono_recuperar_tarefa_assincrona",
      path: "/api/recovery-task",
      description: "Recovery Task",
      params: [
        {
          name: "request_uid",
          displayName: "Request UID",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    }
  ],
  Cadastros: [
    {
      name: "Consult CPF companies",
      value: "cadastros_consultar_empresas_do_cpf",
      path: "/pessoas/empresas",
      description: "Consultation - CPF Companies",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consult CPF name",
      value: "cadastros_consultar_nome_do_cpf",
      path: "/pessoas/nome",
      description: "Consultation - CPF Name",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consultation - CPF registration data",
      value: "cadastros_consulta_dados_cadastrais_do_cpf",
      path: "/pessoas/cadastro",
      description: "Consultation - CPF Registration Data",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consultation - CPF Location",
      value: "cadastros_consulta_localizacao_cpf",
      path: "/pessoas/localizacao",
      description: "Query - CPF Location v1",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Query - CPF Location v2",
      value: "cadastros_consulta_localizacao_cpf_v2",
      path: "/pessoas/localizacao_v2",
      description: "Query - CPF Location v2",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Query - CPF Location v3",
      value: "cadastros_consulta_localizacao_cpf_v3",
      path: "/pessoas/localizacao_v3",
      description: "Query - CPF Location v3",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consultation - People By Phone",
      value: "cadastros_consulta_pessoas_por_telefone",
      path: "/pessoas/telefone",
      description: "Consultation - People By Phone",
      params: [
        {
          name: "ddd",
          displayName: "DDD",
          type: "string",
          required: true,
          placeholder: "XX"
        },
        {
          name: "numero",
          displayName: "Number",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Consult CNPJ data",
      value: "cadastros_consultar_dados_do_cnpj",
      path: "/empresas/informacoes",
      description: "Consult CNPJ data",
      params: [
        {
          name: "cnpj",
          displayName: "CNPJ",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "Consultation - Serpro Municipalities",
      value: "cadastros_consulta_municipios_serpro",
      path: "/demografia/municipios-serpro",
      description: "Consultation - Serpro Municipalities",
      params: [
        {
          name: "uf",
          displayName: "UF",
          type: "string",
          required: true,
          placeholder: "SP"
        }
      ]
    },
    {
      name: "Consultation - IBGE Municipalities",
      value: "cadastros_consulta_municipios_ibge",
      path: "/demografia/municipios-ibge",
      description: "Consultation - IBGE Municipalities",
      params: [
        {
          name: "uf",
          displayName: "UF",
          type: "string",
          required: true,
          placeholder: "SP"
        }
      ]
    },
    {
      name: "Decode Official Document (QRCode)",
      value: "cadastros_decodificar_documento_oficial_qrcode",
      path: "/documentos/decodificar",
      description: "Search - Decode Official Document (QRCode)",
      params: [
        {
          name: "image_base64",
          displayName: "Image Base64",
          type: "string",
          required: true,
          placeholder: "iVBORw0KGgoAAAANSUhEUgAAAO0AAADwCAAAAADJbrwWAAAAtGVYSWZJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAABmAAAAAAAAAC8ZAQDoAwAALxkBAOgDAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAA7QAAAAOgBAABAAAA8AAAAAAAAAB5vlIiAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nOy9eXhNV/Q3vnIzR2ZTSBAEQRAEQcxTTUVNLUKpsYaaaihFa66ixupADa2hZhVDzFJiDkKCIEgkpkQkMpDkrnettc+59ybS9/n+/vn9nuf9vft5knvuuWeffT5n7zXutfYG/P9Tgf+vH+D/1fJ/0f6fW/4v2v9zy/9F+39u0dEaC503FvXVWOCnoj4L36aIav/TM4Xuafzf/P3HQ39YTH379O995rL3CJ3J2yuH+fLz0Z1v6f/pPfv+foEXd9P5nfcxZid97rouv7/YHoGvd5yko6xdXO0Anzywb9+e9/QZvnffzjQ8u0e7+86HeHvXvl23tZaf/b1vz1lM27lvb7j+1AXbPbnjNR2d356MV7fFY/TWu3h3azTGb7uKydvP0y+vd6r7HsLcPardPXkYZgFn39/PCqHdCpbFgdtUh+pnG4in/1Xo+1FsLucX4Bj5HCS/H4dAvAY+dPTcXI0/c+jTnj4vYXXT3X/E8fR/tNYde+m4El6i/26mPqCSbWq3PFyjo/qwB7vBUhwMU3AKDMafoAdug/r0yzX9vvhebzcTC8CBvYXQ7oISndup0qEZlMHcI2Ft+EvbQ0fy8OSpT5rtOJyBQdCgxa/nR7UrQzdYhn80adexGnSODA8PP70QAq6shgDMPPIX/WbdoeOxcH5UaudwDoa2adf4PgbTt7pd"
        },
        {
          name: "verify_signature",
          displayName: "Verify Signature",
          type: "string",
          required: true,
          placeholder: "1"
        }
      ]
    }
  ],
  "Orgãos": [
    {
      name: "SINTEGRA Consultation - National",
      value: "orgaos_consulta_sintegra_nacional",
      path: "/orgaos/sintegra",
      description: "SINTEGRA Consultation - National",
      params: [
        {
          name: "cnpj_ie",
          displayName: "CNPJ or IE",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        },
        {
          name: "tipo",
          displayName: "Type",
          type: "string",
          required: true,
          placeholder: "CNPJ"
        },
        {
          name: "uf",
          displayName: "UF",
          type: "string",
          required: true,
          placeholder: "SP"
        }
      ]
    },
    {
      name: "NFe consultation",
      value: "orgaos_consulta_nfe",
      path: "/orgaos/nfe",
      description: "NFe consultation",
      params: [
        {
          name: "chave",
          displayName: "Key",
          type: "string",
          required: true,
          placeholder: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },
        {
          name: "baixarBoletos",
          displayName: "Download Boletos",
          type: "string",
          required: true,
          placeholder: "true"
        }
      ]
    },
    {
      name: "SUFRAMA Consultation - National",
      value: "orgaos_consulta_suframa_nacional",
      path: "/orgaos/suframa",
      description: "SUFRAMA Consultation - National",
      params: [
        {
          name: "cnpj",
          displayName: "CNPJ",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "CPF status at Receita Federal",
      value: "orgaos_situacao_do_cpf_na_receita_federal",
      path: "/pessoas/situacao",
      description: "CPF status at Receita Federal",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "data_nascimento",
          displayName: "Date of Birth",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    },
    {
      name: "CNPJ status at the Federal Revenue Office",
      value: "orgaos_situacao_do_cnpj_na_receita_federal",
      path: "/empresas/situacao",
      description: "CNPJ status at the Federal Revenue Office",
      params: [
        {
          name: "cnpj",
          displayName: "CNPJ",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "Consultation of labor debt certificates",
      value: "orgaos_consulta_de_certidao_debitos_trabalhista",
      path: "/orgaos/certidao-debito-trabalhista",
      description: "Consultation of Labor Debt Certificates",
      params: [
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "CNJ arrest warrant consultation",
      value: "orgaos_consulta_de_mandato_de_prisao_cnj",
      path: "/orgaos/mandados_cnj",
      description: "Consultation of arrest warrants",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    }
  ],
  "Crédito": [
    {
      name: "PF Full Credit",
      value: "credito_credito_completa_pf",
      path: "/credito/credito-completa-pf",
      description: "Individual Full Credit",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Full Credit",
      value: "credito_credito_completa_pj",
      path: "/credito/credito-completa-pj",
      description: "Full Corporate Credit",
      params: [
        {
          name: "cnpj",
          displayName: "CNPJ",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "Restriction Score PF",
      value: "credito_restricao_score_pf",
      path: "/credito/restricao-score-pf",
      description: "Restriction Score PF",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Restriction Score PJ",
      value: "credito_restricao_score_pj",
      path: "/credito/restricao-score-pj",
      description: "Restriction Score PJ",
      params: [
        {
          name: "cnpj",
          displayName: "CNPJ",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "Location Score",
      value: "credito_localizacao_score",
      path: "/credito/localizacao-score",
      description: "Location Score",
      params: [
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Bank Debt (CPF/CNPJ)",
      value: "credito_endividamento_bancario_cpf_cnpj",
      path: "/credito/endividamento-bancario",
      description: "Detailed consultation of debts and credit limits linked to CPF or CNPJ in the banking system.",
      params: [
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    }
  ],
  "Veículos > Informações": [
    {
      name: "National consultation - Aggregates",
      value: "veiculos_informacoes_consulta_nacional_agregados",
      path: "/veiculos/agregados",
      description: "National consultation - Aggregates",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        },
        {
          name: "chassi",
          displayName: "Chassis",
          type: "string",
          required: false,
          placeholder: "XXXXXXXXXXXXXXXXXX"
        },
        {
          name: "motor",
          displayName: "Engine",
          type: "string",
          required: false,
          placeholder: "XXXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "National consultation - Aggregates V2",
      value: "veiculos_informacoes_consulta_nacional_agregados_v2",
      path: "/veiculos/agregados_v2",
      description: "National consultation - Aggregates",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        },
        {
          name: "chassi",
          displayName: "Chassis",
          type: "string",
          required: false,
          placeholder: "XXXXXXXXXXXXXXXXXX"
        },
        {
          name: "motor",
          displayName: "Engine",
          type: "string",
          required: false,
          placeholder: "XXXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "National query - National BIN",
      value: "veiculos_informacoes_consulta_nacional_bin_nacional",
      path: "/veiculos/bin-nacional",
      description: "Vehicle consultation - National BIN",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National query - National BIN V2",
      value: "veiculos_informacoes_consulta_nacional_bin_nacional_v2",
      path: "/veiculos/bin-nacional-v2",
      description: "Vehicle consultation - BIN National V2",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National consultation - State base",
      value: "veiculos_informacoes_consulta_nacional_base_estadual",
      path: "/veiculos/bin-estadual",
      description: "Vehicle consultation - State BIN",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National consultation - National Base V2",
      value: "veiculos_informacoes_consulta_nacional_base_nacional_v2",
      path: "/veiculos/base-nacional-v2",
      description: "National consultation - National Base",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National consultation - Basic",
      value: "veiculos_informacoes_consulta_nacional_basica",
      path: "/veiculos/informacao-basica",
      description: "Basic vehicle query by license plate (National)",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National inquiry - 0km vehicle inquiry",
      value: "veiculos_informacoes_consulta_nacional_consulta_veiculo_0km",
      path: "/veiculos/consulta-0km",
      description: "0km Vehicle Search by Chassis",
      params: [
        {
          name: "chassi",
          displayName: "Chassis",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "National consultation - Basic V2",
      value: "veiculos_informacoes_consulta_nacional_basica_v2",
      path: "/veiculos/informacao-basica-v2",
      description: "Basic vehicle query by license plate (V2)",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National query - Owner / Last license year",
      value: "veiculos_informacoes_consulta_nacional_proprietario_ano_ultimo_licenciamento",
      path: "/veiculos/proprietario-ano-licenciamento",
      description: "National query - Owner / Last license year",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National query - Current Owner",
      value: "veiculos_informacoes_consulta_nacional_proprietario_atual",
      path: "/veiculos/proprietario-atual",
      description: "National query - Current Owner",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        }
      ]
    },
    {
      name: "National consultation - Simple V2",
      value: "veiculos_informacoes_consulta_nacional_simples_v2",
      path: "/veiculos/informacao-simples-v2",
      description: "Vehicle consultation - National Simple V2",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National consultation - V3 infringements",
      value: "veiculos_informacoes_consulta_nacional_infracoes_v3",
      path: "/veiculos/infracoes-v3",
      description: "Vehicle consultation - Offenses V3",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "000-XXXX"
        }
      ]
    },
    {
      name: "National consultation - Information by Renavam",
      value: "veiculos_informacoes_consulta_nacional_informacoes_por_renavam",
      path: "/veiculos/informacao-por-renavam",
      description: "National consultation - Information by Renavam",
      params: [
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "National query - Chassis decoding",
      value: "veiculos_informacoes_consulta_nacional_decodificacao_de_chassi",
      path: "/veiculos/decodificar-chassi",
      description: "National query - Chassis decoding",
      params: [
        {
          name: "chassi",
          displayName: "Chassis",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "National consultation - Engine decoding",
      value: "veiculos_informacoes_consulta_nacional_decodificacao_de_motor",
      path: "/veiculos/decodificar-motor",
      description: "National consultation - Engine decoding",
      params: [
        {
          name: "motor",
          displayName: "Engine",
          type: "string",
          required: true,
          placeholder: "XXXXXXXX"
        }
      ]
    },
    {
      name: "National consultation - Chronograph",
      value: "veiculos_informacoes_consulta_nacional_cronotacografo",
      path: "/veiculos/cronotacografo",
      description: "Vehicle query - National Chronograph",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National consultation - V2 liens",
      value: "veiculos_informacoes_consulta_nacional_gravames_v2",
      path: "/veiculos/gravames-v2",
      description: "Vehicle consultation - National liens V2",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National consultation - V3 liens",
      value: "veiculos_informacoes_consulta_nacional_gravames_v3",
      path: "/veiculos/gravames-v3",
      description: "National Consultation - Liens V3",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "JSN2936"
        }
      ]
    },
    {
      name: "National consultation - History of liens",
      value: "veiculos_informacoes_consulta_nacional_historico_de_gravames",
      path: "/veiculos/historico_gravames",
      description: "Vehicle consultation - History of liens",
      params: [
        {
          name: "chassi",
          displayName: "Chassis",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXXXXXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "National query - UF of license plate",
      value: "veiculos_informacoes_consulta_nacional_uf_da_placa",
      path: "/veiculos/uf-placa",
      description: "Consultation of vehicles - UF of the National license plate",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        }
      ]
    },
    {
      name: "National consultation - Trademarks",
      value: "veiculos_informacoes_consulta_nacional_marcas",
      path: "/veiculos/marcas",
      description: "Vehicle search - Brands by type",
      params: [
        {
          name: "tipo",
          displayName: "Type",
          type: "string",
          required: true,
          placeholder: "car"
        }
      ]
    },
    {
      name: "National consultation - Templates",
      value: "veiculos_informacoes_consulta_nacional_modelos",
      path: "/veiculos/modelos",
      description: "Vehicle search - Models by type and make",
      params: [
        {
          name: "tipo",
          displayName: "Type",
          type: "string",
          required: true,
          placeholder: "motorcycle"
        },
        {
          name: "marca",
          displayName: "Brand",
          type: "string",
          required: true,
          placeholder: "bmw"
        }
      ]
    },
    {
      name: "National consultation - Recall",
      value: "veiculos_informacoes_consulta_nacional_recall",
      path: "/veiculos/recall",
      description: "Vehicle consultation - National Recall",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National query - Renavam",
      value: "veiculos_informacoes_consulta_nacional_renavam",
      path: "/veiculos/renavam",
      description: "Vehicle consultation - National Renavam",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National query - Renavam V2",
      value: "veiculos_informacoes_consulta_nacional_renavam_v2",
      path: "/veiculos/renavam-v2",
      description: "Vehicle consultation - Renavam National V2",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National consultation - Auction",
      value: "veiculos_informacoes_consulta_nacional_leilao",
      path: "/veiculos/leilao",
      description: "Vehicle search - Auction",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National consultation - Theft and burglary reports",
      value: "veiculos_informacoes_consulta_nacional_indicio_de_roubo_e_furto",
      path: "/veiculos/indicio-roubo-furto",
      description: "Vehicle search - Theft and burglary reports",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National consultation - Indication of a claim",
      value: "veiculos_informacoes_consulta_nacional_indicio_de_sinistro",
      path: "/veiculos/sinistro",
      description: "Vehicle inquiry - Indication of loss",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National consultation - Theft and Robbery",
      value: "veiculos_informacoes_consulta_nacional_roubo_e_furto",
      path: "/veiculos/roubo_furto",
      description: "Vehicle Search - Theft and Robbery",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National consultation - FIPE History",
      value: "veiculos_informacoes_consulta_nacional_historico_fipe",
      path: "/veiculos/historico-fipe",
      description: "National consultation - FIPE History",
      params: [
        {
          name: "codigo_fipe",
          displayName: "FIPE Code",
          type: "string",
          required: true,
          placeholder: "XXXXXX-X"
        },
        {
          name: "ano_fabricacao",
          displayName: "Year of Manufacture",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "ano_modelo",
          displayName: "Model Year",
          type: "string",
          required: true,
          placeholder: "XXXX"
        }
      ]
    },
    {
      name: "National Consultation - Renajud V3",
      value: "veiculos_informacoes_consulta_nacional_renajud_v3",
      path: "/veiculos/renajud-v3",
      description: "National Consultation - Renajud V3",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "National Consultation - Renajud V4",
      value: "veiculos_informacoes_consulta_nacional_renajud_v4",
      path: "/veiculos/renajud-v4",
      description: "National Consultation - Renajud V4",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "FAW9874"
        }
      ]
    },
    {
      name: "Vehicle Safety Certificate - CSV",
      value: "veiculos_informacoes_certificado_de_seguranca_veicular_csv",
      path: "/veiculos/csv",
      description: "Vehicle Safety Certificate - CSV",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "National Consultation - Vehicles by document (CPF/CNPJ)",
      value: "veiculos_informacoes_consulta_nacional_veiculos_por_documento_cpf_cnpj",
      path: "/pessoas/veiculos",
      description: "National Consultation - Vehicles by Document (CPF/CNPJ)",
      params: [
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "National Consultation - Vehicles by document (CPF/CNPJ) - V2",
      value: "veiculos_informacoes_consulta_nacional_veiculos_por_documento_cpf_cnpj_v2",
      path: "/pessoas/veiculos_v2",
      description: "National Consultation - Vehicles by document (CPF/CNPJ) - V2",
      params: [
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "National Consultation - Vehicle Owner History",
      value: "veiculos_informacoes_consulta_nacional_veiculos_historico_proprietarios",
      path: "/veiculos/historico-proprietario",
      description: "Owner history inquiry",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    }
  ],
  "Veículos > Débitos": [
    {
      name: "Amapá",
      value: "veiculos_debitos_amapa",
      path: "/debitos/ap",
      description: "Debt Consultation - Amapá",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Acre",
      value: "veiculos_debitos_acre",
      path: "/debitos/ac",
      description: "Debt Consultation - Acre",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Alagoas",
      value: "veiculos_debitos_alagoas",
      path: "/debitos/al",
      description: "Debt Consultation - Alagoas",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Amazonas",
      value: "veiculos_debitos_amazonas",
      path: "/debitos/am",
      description: "Debt Consultation - Amazonas",
      params: [
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Ceará",
      value: "veiculos_debitos_ceara",
      path: "/debitos/ce",
      description: "Debt Consultation - Ceará",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Federal District",
      value: "veiculos_debitos_distrito_federal",
      path: "/debitos/df",
      description: "Debt Consultation - Federal District",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Espírito Santo",
      value: "veiculos_debitos_espirito_santo",
      path: "/debitos/es",
      description: "Debt Consultation - Espírito Santo",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Goiás",
      value: "veiculos_debitos_goias",
      path: "/debitos/go",
      description: "Debt Consultation - Goiás",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Minas Gerais (IPVA/Licensing)",
      value: "veiculos_debitos_minas_gerais_ipva_licenciamento",
      path: "/debitos/mg-simples",
      description: "Debt Consultation - Minas Gerais (IPVA/Licensing)",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "00000000000"
        }
      ]
    },
    {
      name: "Maranhão",
      value: "veiculos_debitos_maranhao",
      path: "/debitos/ma",
      description: "Debt Consultation - Maranhão",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Mato Grosso",
      value: "veiculos_debitos_mato_grosso",
      path: "/debitos/mt",
      description: "Debt Consultation - Mato Grosso",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Mato Grosso do Sul",
      value: "veiculos_debitos_mato_grosso_do_sul",
      path: "/debitos/ms",
      description: "Debt Consultation - Mato Grosso do Sul",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Pará",
      value: "veiculos_debitos_para",
      path: "/debitos/pa",
      description: "Debt Consultation - Pará",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Paraíba",
      value: "veiculos_debitos_paraiba",
      path: "/debitos/pb",
      description: "Vehicle debt inquiry - Paraíba",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Paraná",
      value: "veiculos_debitos_parana",
      path: "/debitos/pr",
      description: "Vehicle debt inquiry - Paraná",
      params: [
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Piauí",
      value: "veiculos_debitos_piaui",
      path: "/debitos/pi",
      description: "Vehicle debt inquiry - Piauí",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Rio de Janeiro",
      value: "veiculos_debitos_rio_de_janeiro",
      path: "/debitos/rj",
      description: "Vehicle debt inquiries - Rio de Janeiro",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "00000000000"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "Rio Grande do Norte",
      value: "veiculos_debitos_rio_grande_do_norte",
      path: "/debitos/rn",
      description: "Vehicle debt inquiry - Rio Grande do Norte",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Rondônia",
      value: "veiculos_debitos_rondonia",
      path: "/debitos/ro",
      description: "Vehicle debt inquiry - Rondônia",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Roraima",
      value: "veiculos_debitos_roraima",
      path: "/debitos/rr",
      description: "Vehicle debt inquiry - Roraima",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Santa Catarina",
      value: "veiculos_debitos_santa_catarina",
      path: "/debitos/sc",
      description: "Vehicle debt inquiry - Santa Catarina",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "chassi",
          displayName: "Chassis",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Santa Catarina V2",
      value: "veiculos_debitos_santa_catarina_v2",
      path: "/debitos/sc-v2",
      description: "Vehicle debt inquiry - Santa Catarina V2",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "São Paulo",
      value: "veiculos_debitos_sao_paulo",
      path: "/debitos/sp",
      description: "Debt Consultation - São Paulo",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Tocantins",
      value: "veiculos_debitos_tocantins",
      path: "/debitos/to",
      description: "Vehicle debt inquiry - Tocantins",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXXX"
        }
      ]
    }
  ],
  "Veículos > Orgãos > ANTT - Prod. Perigosos": [
    {
      name: "Certificate - CTPP",
      value: "veiculos_orgaos_antt_prod_perigosos_certificado_ctpp",
      path: "/orgaos/consulta-antt-ctpp",
      description: "Certificate Consultation - Dangerous Goods Certificate",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        },
        {
          name: "certificado",
          displayName: "Certificate",
          type: "string",
          required: false,
          placeholder: "XXXXX"
        },
        {
          name: "equipamento",
          displayName: "Equipment",
          type: "string",
          required: false,
          placeholder: "XXXXX"
        }
      ]
    },
    {
      name: "Certificate - CIPP",
      value: "veiculos_orgaos_antt_prod_perigosos_certificado_cipp",
      path: "/orgaos/consulta-antt-cipp",
      description: "Certificate Consultation - Dangerous Goods Inspection Certificate",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        },
        {
          name: "certificado",
          displayName: "Certificate",
          type: "string",
          required: false,
          placeholder: "XXXXX"
        },
        {
          name: "equipamento",
          displayName: "Equipment",
          type: "string",
          required: false,
          placeholder: "XXXXX"
        }
      ]
    },
    {
      name: "Certificate - CIV",
      value: "veiculos_orgaos_antt_prod_perigosos_certificado_civ",
      path: "/orgaos/consulta-antt-civ",
      description: "Certificate Consultation - Vehicle Inspection Certificate.",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        },
        {
          name: "certificado",
          displayName: "Certificate",
          type: "string",
          required: false,
          placeholder: "XXXXX"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: false,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    }
  ],
  "Veículos > Orgãos": [
    {
      name: "ANTT Vehicle",
      value: "veiculos_orgaos_antt_veiculo",
      path: "/orgaos/antt-veiculo",
      description: "Vehicle Consultation - ANTT",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "ANTT Carrier",
      value: "veiculos_orgaos_antt_transportador",
      path: "/orgaos/antt-transportador",
      description: "Carrier Consultation - ANTT",
      params: [
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "DER",
      value: "veiculos_orgaos_der",
      path: "/orgaos/der",
      description: "Consultation of Notifications - DER",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "DER PR",
      value: "veiculos_orgaos_der_pr",
      path: "/orgaos/der-pr",
      description: "Consultation of Notifications - DER PR",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Detran SP - Vehicle Process Monitoring",
      value: "veiculos_orgaos_detran_sp_acompanhamento_de_processo_veicular",
      path: "/orgaos/detran-sp-acompanhamento",
      description: "Detran SP - Vehicle Process Monitoring",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: false,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Vehicle Licensing - Rio de Janeiro",
      value: "veiculos_orgaos_licenciamento_veicular_rio_de_janeiro",
      path: "/orgaos/licenciamento-rj",
      description: "Vehicle Licensing Consultation - Rio de Janeiro",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Vehicle Licensing - Paraná",
      value: "veiculos_orgaos_licenciamento_veicular_parana",
      path: "/orgaos/licenciamento-pr",
      description: "Vehicle License Consultation - Paraná",
      params: [
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Vehicle Licensing - Minas Gerais",
      value: "veiculos_orgaos_licenciamento_veicular_minas_gerais",
      path: "/veiculos/licenciamento-mg",
      description: "Vehicle Licensing Consultation - Minas Gerais",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXXXXXX"
        },
        {
          name: "chassi",
          displayName: "Chassis",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Vehicle Licensing - Ceará",
      value: "veiculos_orgaos_licenciamento_veicular_ceara",
      path: "/veiculos/licenciamento-ce",
      description: "Vehicle Licensing Consultation - Ceará",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXXXXXX"
        }
      ]
    },
    {
      name: "Vehicle Licensing - Federal District",
      value: "veiculos_orgaos_licenciamento_veicular_distrito_federal",
      path: "/veiculos/licenciamento-df",
      description: "Vehicle Licensing Consultation - Ceará",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXXXXXX"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Vehicle Licensing - Tocantins",
      value: "veiculos_orgaos_licenciamento_veicular_tocantins",
      path: "/veiculos/licenciamento-to",
      description: "Vehicle Licensing Consultation - Tocantins",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXXXXXX"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Vehicle Licensing - Roraima",
      value: "veiculos_orgaos_licenciamento_veicular_roraima",
      path: "/veiculos/licenciamento-rr",
      description: "Vehicle License Consultation - Roraima",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXXXXXX"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "PRF",
      value: "veiculos_orgaos_prf",
      path: "/orgaos/prf",
      description: "Consultation of Notifications - PRF",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "São Paulo State Attorney General's Office",
      value: "veiculos_orgaos_procuradoria_geral_do_estado_de_sao_paulo",
      path: "/orgaos/pge-sp",
      description: "Consultation of outstanding debts - P.G.E. SP",
      params: [
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    }
  ],
  "Veículos > Documentos": [
    {
      name: "Issuing CRLVe (AC)",
      value: "veiculos_documentos_emissao_de_crlve_ac",
      path: "/veiculos/documentos-crlve-ac",
      description: "Issuing CRLV-e (AC) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (AL)",
      value: "veiculos_documentos_emissao_de_crlve_al",
      path: "/veiculos/documentos-crlve-al",
      description: "Issuing CRLV-e (AL) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (AM)",
      value: "veiculos_documentos_emissao_de_crlve_am",
      path: "/veiculos/documentos-crlve-am",
      description: "Issuing CRLV-e (AM) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (AP)",
      value: "veiculos_documentos_emissao_de_crlve_ap",
      path: "/veiculos/documentos-crlve-ap",
      description: "Issuing CRLVe (AP)",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Issuing CRLVe (BA)",
      value: "veiculos_documentos_emissao_de_crlve_ba",
      path: "/veiculos/documentos-crlve-ba-v2",
      description: "Issuing CRLV-e (BA) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (BA) PF",
      value: "veiculos_documentos_emissao_de_crlve_ba_pf",
      path: "/veiculos/documentos-crlve-ba-pf",
      description: "Issuing CRLVe (BA) PF",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (CE)",
      value: "veiculos_documentos_emissao_de_crlve_ce",
      path: "/veiculos/documentos-crlve-ce",
      description: "Issuing CRLVe (CE) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (DF)",
      value: "veiculos_documentos_emissao_de_crlve_df",
      path: "/veiculos/documentos-crlve-df",
      description: "Issuing CRLVe (DF) only PF \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (ES)",
      value: "veiculos_documentos_emissao_de_crlve_es",
      path: "/veiculos/documentos-crlve-es",
      description: "Issuing CRLVe (ES) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Issuing CRLVe (GO) V2",
      value: "veiculos_documentos_emissao_de_crlve_go_v2",
      path: "/veiculos/documentos-crlve-go-v2",
      description: "Issuing CRLVe (GO) V2 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (MA)",
      value: "veiculos_documentos_emissao_de_crlve_ma",
      path: "/veiculos/documentos-crlve-ma",
      description: "Issuing CRLVe (MA)",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Issuing CRLVe (MT)",
      value: "veiculos_documentos_emissao_de_crlve_mt",
      path: "/veiculos/documentos-crlve-mt",
      description: "Issuing CRLVe (MT)",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Issuing CRLVe (MG)",
      value: "veiculos_documentos_emissao_de_crlve_mg",
      path: "/veiculos/documentos-crlve-mg",
      description: "Issuing CRLVe (MG)",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (MG) V2",
      value: "veiculos_documentos_emissao_de_crlve_mg_v2",
      path: "/veiculos/documentos-crlve-mg-v2",
      description: "Issuing CRLVe (MG) V2 without CRV Number",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Issuing CRLVe (MG) V3",
      value: "veiculos_documentos_emissao_de_crlve_mg_v3",
      path: "/veiculos/documentos-crlve-mg-v3",
      description: "Issuing CRLVe (MG) V3",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "Issuing CRLVe (MS)",
      value: "veiculos_documentos_emissao_de_crlve_ms",
      path: "/veiculos/documentos-crlve-ms",
      description: "Issuing CRLVe (MS) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "num_crv",
          displayName: "CRV Number",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXX"
        },
        {
          name: "cod_seg_crv",
          displayName: "CRV Security Code",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Issuing CRLVe (MS) V2",
      value: "veiculos_documentos_emissao_de_crlve_ms_v2",
      path: "/veiculos/documentos-crlve-ms-v2",
      description: "Issuing CRLV-e (MS) V2 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (PA)",
      value: "veiculos_documentos_emissao_de_crlve_pa",
      path: "/veiculos/documentos-crlve-pa",
      description: "Issuing CRLVe (PA)",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Issuing CRLVe (PB)",
      value: "veiculos_documentos_emissao_de_crlve_pb",
      path: "/veiculos/documentos-crlve-pb",
      description: "Issuing CRLVe (PB) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (PE) V3",
      value: "veiculos_documentos_emissao_de_crlve_pe_v3",
      path: "/veiculos/documentos-crlve-pe-v3",
      description: "Issuing CRLV-e (PE) V3 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (PR) PJ",
      value: "veiculos_documentos_emissao_de_crlve_pr_pj",
      path: "/veiculos/documentos-crlve-pr-pj",
      description: "Issuing CRLVe (PR) - PJ",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Issuing CRLVe (PR) V2",
      value: "veiculos_documentos_emissao_de_crlve_pr_v2",
      path: "/veiculos/documentos-crlve-pr-v2",
      description: "Issuing CRLV-e (PR) V2",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Issuing CRLVe (PI)",
      value: "veiculos_documentos_emissao_de_crlve_pi",
      path: "/veiculos/documentos-crlve-pi",
      description: "Issuing CRLVe (PI)",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Issuing CRLVe (RN) V2",
      value: "veiculos_documentos_emissao_de_crlve_rn_v2",
      path: "/veiculos/documentos-crlve-rn-v2",
      description: "Issuing CRLVe (RN) V2 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (RJ) V2",
      value: "veiculos_documentos_emissao_de_crlve_rj_v2",
      path: "/veiculos/documentos-crlve-rj-v2",
      description: "Issuing CRLV-e (RJ) V2 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (RJ) - Flash",
      value: "veiculos_documentos_emissao_de_crlve_rj_flash",
      path: "/veiculos/documentos-crlve-rj-flash",
      description: "Issuing CRLVe (RJ) - Flash \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (RR)",
      value: "veiculos_documentos_emissao_de_crlve_rr",
      path: "/veiculos/documentos-crlve-rr",
      description: "Issuing CRLVe (RR) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (RS) V2",
      value: "veiculos_documentos_emissao_de_crlve_rs_v2",
      path: "/veiculos/documentos-crlve-rs-v2",
      description: "Issuing CRLV-e (RS) V2 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (SC) V2",
      value: "veiculos_documentos_emissao_de_crlve_sc_v2",
      path: "/veiculos/documentos-crlve-sc-v2",
      description: "Issuing CRLV-e (SC) V2 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (SE)",
      value: "veiculos_documentos_emissao_de_crlve_se",
      path: "/veiculos/documentos-crlve-se",
      description: "Issuing CRLVe (SE) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Issuing CRLVe (SP) V4",
      value: "veiculos_documentos_emissao_de_crlve_sp_v4",
      path: "/veiculos/documentos-crlve-sp-v4",
      description: "Issuing CRLVe (SP) V4 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXXXX"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Issuing CRLVe (TO)",
      value: "veiculos_documentos_emissao_de_crlve_to",
      path: "/veiculos/documentos-crlve-to",
      description: "Issuing CRLVe (TO)",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "documento",
          displayName: "Document",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "Communication / Sales communication V2",
      value: "veiculos_documentos_comunicacao_comunicado_de_venda_v2",
      path: "/veiculos/comunicado_venda_v2",
      description: "Communication / Sales Announcement",
      params: [
        {
          name: "veiculo[placa]",
          displayName: "Vehicle Plate",
          type: "string",
          required: true,
          placeholder: "ABC1234"
        },
        {
          name: "veiculo[renavam]",
          displayName: "Vehicle Renavam",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "veiculo[ano_fabricacao]",
          displayName: "Vehicle Year of Manufacture",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "veiculo[ano_modelo]",
          displayName: "Vehicle Year Model",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "veiculo[numero_crv]",
          displayName: "Vehicle CRV Number",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "veiculo[data_emissao_crv]",
          displayName: "Vehicle CRV Issue Date",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "veiculo[n_via_crv]",
          displayName: "Vehicle CRV Issue Number",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "veiculo[cod_seguranca_crv]",
          displayName: "Vehicle CRV Security Code",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "veiculo[uf]",
          displayName: "Vehicle UF",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "vendedor[nome]",
          displayName: "Seller Name",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "vendedor[documento]",
          displayName: "Seller Document",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "vendedor[cidade]",
          displayName: "Seller City",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "vendedor[uf]",
          displayName: "Seller UF",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[nome]",
          displayName: "Buyer Name",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[documento]",
          displayName: "Buyer Document",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[endereco][cep]",
          displayName: "Buyer Address Zip Code",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[endereco][logradouro]",
          displayName: "Buyer Address Street",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[endereco][numero]",
          displayName: "Buyer Address Number",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[endereco][bairro]",
          displayName: "Buyer Address Neighborhood",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[endereco][complemento]",
          displayName: "Buyer Address",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[endereco][uf]",
          displayName: "Buyer Address UF",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[endereco][cidade]",
          displayName: "Buyer Address City",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "venda[data]",
          displayName: "Sale Date",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "venda[valor]",
          displayName: "Sale Value",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprovante",
          displayName: "Proof",
          type: "string",
          required: true,
          placeholder: "XXXX (PDF BASE64 of APTV-e and/or CVE double-sided)"
        },
        {
          name: "request_uid",
          displayName: "Request UID",
          type: "string",
          required: false,
          placeholder: "XXXXXXXXX"
        }
      ]
    },
    {
      name: "Cancel Communication / Sales Announcement V2",
      value: "veiculos_documentos_cancelar_comunicacao_comunicado_de_venda_v2",
      path: "/veiculos/cancelar_comunicado_venda_v2",
      description: "Cancel Communication / Sales Announcement",
      params: [
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX9999"
        },
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "numero_crv",
          displayName: "CRV Number",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "num_transacao",
          displayName: "Transaction Number",
          type: "string",
          required: true,
          placeholder: "XXXXXX"
        },
        {
          name: "motivo_cancelamento",
          displayName: "Reason for Cancellation",
          type: "string",
          required: true,
          placeholder: "XXXX"
        }
      ]
    }
  ],
  "Veículos > Divida Ativida": [
    {
      name: "Consultation - Active Debt São Paulo",
      value: "veiculos_divida_ativida_consulta_divida_ativa_sao_paulo",
      path: "/dividaativa/sp",
      description: "Consultation - Active Debt São Paulo|",
      params: [
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Consultation - Active Debt Rio de Janeiro",
      value: "veiculos_divida_ativida_consulta_divida_ativa_rio_de_janeiro",
      path: "/dividaativa/rj",
      description: "Consultation - Active Debt Rio de Janeiro|",
      params: [
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Consultation - Active Debt Federal District",
      value: "veiculos_divida_ativida_consulta_divida_ativa_distrito_federal",
      path: "/dividaativa/df",
      description: "Consultation - Active Debt Federal District|",
      params: [
        {
          name: "renavam",
          displayName: "Renavam",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "placa",
          displayName: "Plate",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    }
  ],
  "CNH > Nacional": [
    {
      name: "National Consultation - Simple",
      value: "cnh_nacional_consulta_nacional_simples",
      path: "/cnh/nacional-simples",
      description: "National Consultation - Simple",
      params: [
        {
          name: "cnh",
          displayName: "CNH",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "data_nascimento",
          displayName: "Date of Birth",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    },
    {
      name: "National Consultation - Complete V2",
      value: "cnh_nacional_consulta_nacional_completa_v2",
      path: "/cnh/nacional-completa-v2",
      description: "National Consultation - Complete V2",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "National Consultation - Complete via CNH V2",
      value: "cnh_nacional_consulta_nacional_completa_via_cnh_v2",
      path: "/cnh/nacional-completa-cnh-v2",
      description: "National Consultation - Complete via CNH V2",
      params: [
        {
          name: "cnh",
          displayName: "CNH",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "National Consultation - Complete V3",
      value: "cnh_nacional_consulta_nacional_completa_v3",
      path: "/cnh/nacional_completa_v3",
      description: "National Consultation - Complete V3",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "National Consultation - Complete V4 (CPF)",
      value: "cnh_nacional_consulta_nacional_completa_v4_cpf",
      path: "/cnh/nacional-completa-v4",
      description: "National Consultation - Complete V4",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "National Consultation - Simple V2",
      value: "cnh_nacional_consulta_nacional_simples_v2",
      path: "/cnh/nacional-simples-v2",
      description: "**National Consultation - Simple V2**",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    }
  ],
  "CNH > Paraná": [
    {
      name: "Full consultation",
      value: "cnh_parana_consulta_completa",
      path: "/cnh/pr-completa",
      description: "**Full consultation",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "CNH",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "data_validade_cnh",
          displayName: "CNH Expiration Date",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    },
    {
      name: "Full consultation V2",
      value: "cnh_parana_consulta_completa_v2",
      path: "/cnh/pr-completa-v2",
      description: "**Full consultation V2**",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "CNH",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "data_validade_cnh",
          displayName: "CNH Expiration Date",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    },
    {
      name: "Cassation",
      value: "cnh_parana_cassacao",
      path: "/cnh/pr-cassacao",
      description: "Cassation - Paraná|",
      params: [
        {
          name: "data_inicial",
          displayName: "Start Date",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        },
        {
          name: "data_final",
          displayName: "End Date",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    }
  ],
  "CNH > Rio Grande do Sul": [
    {
      name: "Cassation",
      value: "cnh_rio_grande_do_sul_cassacao",
      path: "/cnh/rs-cassacao",
      description: "Cassation - Rio Grande do Sul",
      params: [
        {
          name: "data_inicial",
          displayName: "Start Date",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        },
        {
          name: "data_final",
          displayName: "End Date",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    }
  ],
  CNH: [
    {
      name: "Complete Acre",
      value: "cnh_acre_completa",
      path: "/cnh/ac-completa",
      description: "Full driver's license - Acre",
      params: [
        {
          name: "nome",
          displayName: "Name",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX XXXXXXXXX XXXXX"
        },
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Complete Alagoas",
      value: "cnh_alagoas_completa",
      path: "/cnh/al-completa",
      description: "Complete CNH Consultation - Alagoas",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "data_nascimento",
          displayName: "Date of Birth",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        },
        {
          name: "cod_municipio_nascimento",
          displayName: "Birth Municipality Code",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "uf_nascimento",
          displayName: "UF Birth",
          type: "string",
          required: true,
          placeholder: "XX"
        }
      ]
    },
    {
      name: "Amazonas complete",
      value: "cnh_amazonas_completa",
      path: "/cnh/am-completa",
      description: "Complete CNH Consultation - Amazonas",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "CNH",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Amapá complete",
      value: "cnh_amapa_completa",
      path: "/cnh/ap-completa",
      description: "Complete CNH Consultation - Amapá",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "nome",
          displayName: "Name",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX XXXXXXXXX XXXXX"
        },
        {
          name: "data_nascimento",
          displayName: "Date of Birth",
          type: "string",
          required: true,
          placeholder: "XX/XX/XX"
        }
      ]
    },
    {
      name: "Complete Ceará",
      value: "cnh_ceara_completa",
      path: "/cnh/ce-completa",
      description: "Complete CNH Consultation - Ceará",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "formulario",
          displayName: "Form",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Goiás complete",
      value: "cnh_goias_completa",
      path: "/cnh/go-completa",
      description: "Complete CNH Consultation - Goiás",
      params: [
        {
          name: "cnh",
          displayName: "CNH",
          type: "string",
          required: true,
          placeholder: "03614904269"
        }
      ]
    },
    {
      name: "Maranhão complete",
      value: "cnh_maranhao_completa",
      path: "/cnh/ma-completa",
      description: "Complete CNH Consultation - Maranhão",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "CNH",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Mato Grosso Complete",
      value: "cnh_mato_grosso_completa",
      path: "/cnh/mt-completa",
      description: "Complete CNH Consultation - Mato Grosso",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "renach",
          displayName: "Renach",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Mato Grosso do Sul Complete",
      value: "cnh_mato_grosso_do_sul_completa",
      path: "/cnh/ms-completa",
      description: "Complete CNH Consultation - Mato Grosso do Sul",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "CNH",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Pará Complete",
      value: "cnh_para_completa",
      path: "/cnh/pa-completa",
      description: "Complete CNH Consultation - Pará",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "CNH",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Paraíba Complete",
      value: "cnh_paraiba_completa",
      path: "/cnh/pb-completa",
      description: "Complete CNH Consultation - Paraíba",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Rio de Janeiro Complete",
      value: "cnh_rio_de_janeiro_completa",
      path: "/cnh/rj-completa",
      description: "Complete CNH Consultation - Rio de Janeiro",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "CNH",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Rio Grande do Norte Complete",
      value: "cnh_rio_grande_do_norte_completa",
      path: "/cnh/rn-completa",
      description: "Complete CNH Consultation - Rio Grande do Norte",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "CNH",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Sergipe Complete",
      value: "cnh_sergipe_completa",
      path: "/cnh/se-completa",
      description: "Complete CNH Consultation - Sergipe",
      params: [
        {
          name: "cnh",
          displayName: "CNH",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "registro",
          displayName: "Registration",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXX"
        },
        {
          name: "data_nascimento",
          displayName: "Date of Birth",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    },
    {
      name: "Tocantins Complete",
      value: "cnh_tocantins_completa",
      path: "/cnh/to-completa",
      description: "Complete CNH Consultation - Tocantins",
      params: [
        {
          name: "cpf",
          displayName: "CPF",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "data_nascimento",
          displayName: "Date of Birth",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    }
  ],
  Inmetro: [
    {
      name: "Query Inmetro speedometer calibration data",
      value: "inmetro_consulta_dados_de_afericao_de_medidores_de_velocidade_inmetro",
      path: "/orgaos/medidor-velocidade",
      description: "Speed Meter Consultation - Inmetro",
      params: [
        {
          name: "numero_inmetro",
          displayName: "Inmetro Number",
          type: "string",
          required: true,
          placeholder: "XXXXXXXX"
        }
      ]
    }
  ],
  "Reclame Aqui": [
    {
      name: "Search for companies",
      value: "reclame_aqui_buscar_empresas",
      path: "/reclameaqui/buscar",
      description: "Search for companies",
      params: [
        {
          name: "texto",
          displayName: "Text",
          type: "string",
          required: true,
          placeholder: "Kabum"
        }
      ]
    },
    {
      name: "Company details",
      value: "reclame_aqui_detalhes_de_uma_empresa",
      path: "/reclameaqui/empresa",
      description: "Company details",
      params: [
        {
          name: "shortname",
          displayName: "Shortname",
          type: "string",
          required: true,
          placeholder: "kabum"
        }
      ]
    },
    {
      name: "Coupons offered by the company",
      value: "reclame_aqui_cupons_oferecidos_pela_empresa",
      path: "/reclameaqui/cupons",
      description: "Coupons offered by the company",
      params: [
        {
          name: "shortname",
          displayName: "Shortname",
          type: "string",
          required: true,
          placeholder: "kabum"
        }
      ]
    },
    {
      name: "Search complaints",
      value: "reclame_aqui_buscar_reclamacoes",
      path: "/reclameaqui/reclamacoes",
      description: "Search Complaints",
      params: [
        {
          name: "id",
          displayName: "ID",
          type: "string",
          required: true,
          placeholder: "7254"
        },
        {
          name: "page",
          displayName: "Page",
          type: "string",
          required: true,
          placeholder: "0"
        },
        {
          name: "query",
          displayName: "Query",
          type: "string",
          required: false,
          placeholder: "water cooler"
        },
        {
          name: "status",
          displayName: "Status",
          type: "string",
          required: false,
          placeholder: "RECENT"
        }
      ]
    },
    {
      name: "Complaint details",
      value: "reclame_aqui_detalhes_da_reclamacao",
      path: "/reclameaqui/reclamacao",
      description: "Complaint details",
      params: [
        {
          name: "id",
          displayName: "ID",
          type: "string",
          required: true,
          placeholder: "0N91cJQkGEBN4t9U"
        }
      ]
    }
  ]
};

export const CATEGORIES = [
  {
    "name": "Account",
    "value": "Conta"
  },
  {
    "name": "Asynchronous",
    "value": "Assíncrono"
  },
  {
    "name": "Registration",
    "value": "Cadastros"
  },
  {
    "name": "Organs",
    "value": "Orgãos"
  },
  {
    "name": "Credit",
    "value": "Crédito"
  },
  {
    "name": "Vehicles > Information",
    "value": "Veículos > Informações"
  },
  {
    "name": "Vehicles > Debts",
    "value": "Veículos > Débitos"
  },
  {
    "name": "Vehicles > Bodies > ANTT - Dangerous Goods",
    "value": "Veículos > Orgãos > ANTT - Prod. Perigosos"
  },
  {
    "name": "Vehicles > Organs",
    "value": "Veículos > Orgãos"
  },
  {
    "name": "Vehicles > Documents",
    "value": "Veículos > Documentos"
  },
  {
    "name": "Vehicles > Active Debt",
    "value": "Veículos > Divida Ativida"
  },
  {
    "name": "CNH > National",
    "value": "CNH > Nacional"
  },
  {
    "name": "CNH > Paraná",
    "value": "CNH > Paraná"
  },
  {
    "name": "CNH > Rio Grande do Sul",
    "value": "CNH > Rio Grande do Sul"
  },
  {
    "name": "CNH",
    "value": "CNH"
  },
  {
    "name": "Inmetro",
    "value": "Inmetro"
  },
  {
    "name": "Reclame Aqui",
    "value": "Reclame Aqui"
  }
];
