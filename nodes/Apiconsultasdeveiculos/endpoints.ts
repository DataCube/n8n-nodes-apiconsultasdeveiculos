/* eslint-disable */
// AUTO-GERADO de Consultas - V2.10.2.73
// Script: postman-to-n8n.js
// Total: 176 endpoints em 17 categorias

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
      name: "Informações de consumo",
      value: "conta_informacoes_de_consumo",
      path: "/conta/consultas",
      description: "Consulta de Consumo da Conta",
      params: [
        {
          name: "de",
          displayName: "De",
          type: "string",
          required: true,
          placeholder: "2019-11-28"
        },
        {
          name: "ate",
          displayName: "Ate",
          type: "string",
          required: true,
          placeholder: "2019-11-29"
        }
      ]
    },
    {
      name: "Informações de Códigos de erros da API",
      value: "conta_informacoes_de_codigos_de_erros_da_api",
      path: "/conta/erros",
      description: "Consulta de Status dos Endpoints",
      params: []
    },
    {
      name: "Informações de status da API",
      value: "conta_informacoes_de_status_da_api",
      path: "/api/status",
      description: "",
      params: []
    }
  ],
  "Assíncrono": [
    {
      name: "Criar tarefa assíncrona",
      value: "assincrono_criar_tarefa_assincrona",
      path: "/async/create-task",
      description: "Create Task",
      params: [
        {
          name: "endpoint",
          displayName: "Endpoint",
          type: "string",
          required: true,
          placeholder: "/pessoas/nome"
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
          displayName: "Inputs Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "notification_url",
          displayName: "Notification Url",
          type: "string",
          required: true,
          placeholder: "http://exemplo.com.br/xxxxx"
        }
      ]
    },
    {
      name: "Buscar tarefa assíncrona",
      value: "assincrono_buscar_tarefa_assincrona",
      path: "/api/get-task",
      description: "Get Task",
      params: [
        {
          name: "request_uid",
          displayName: "Request Uid",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXX"
        }
      ]
    },
    {
      name: "Recuperar tarefa assíncrona",
      value: "assincrono_recuperar_tarefa_assincrona",
      path: "/api/recovery-task",
      description: "Recovery Task",
      params: [
        {
          name: "request_uid",
          displayName: "Request Uid",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    }
  ],
  Cadastros: [
    {
      name: "Consultar empresas do CPF",
      value: "cadastros_consultar_empresas_do_cpf",
      path: "/pessoas/empresas",
      description: "Consulta - Empresas do CPF",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consultar nome do CPF",
      value: "cadastros_consultar_nome_do_cpf",
      path: "/pessoas/nome",
      description: "Consulta - Nome do CPF",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consulta - Dados cadastrais do CPF",
      value: "cadastros_consulta_dados_cadastrais_do_cpf",
      path: "/pessoas/cadastro",
      description: "Consulta - Dados Cadastrais do CPF",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consulta - Localização CPF",
      value: "cadastros_consulta_localizacao_cpf",
      path: "/pessoas/localizacao",
      description: "Consulta - Localização CPF v1",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consulta - Localização CPF v2",
      value: "cadastros_consulta_localizacao_cpf_v2",
      path: "/pessoas/localizacao_v2",
      description: "Consulta - Localização CPF v2",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consulta - Localização CPF v3",
      value: "cadastros_consulta_localizacao_cpf_v3",
      path: "/pessoas/localizacao_v3",
      description: "Consulta - Localização CPF v3",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consulta - Pessoas Por Telefone",
      value: "cadastros_consulta_pessoas_por_telefone",
      path: "/pessoas/telefone",
      description: "Consulta - Pessoas Por Telefone",
      params: [
        {
          name: "ddd",
          displayName: "Ddd",
          type: "string",
          required: true,
          placeholder: "XX"
        },
        {
          name: "numero",
          displayName: "Numero",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Consultar dados do CNPJ",
      value: "cadastros_consultar_dados_do_cnpj",
      path: "/empresas/informacoes",
      description: "Consultar dados do CNPJ",
      params: [
        {
          name: "cnpj",
          displayName: "Cnpj",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "Consulta -  Municípios Serpro",
      value: "cadastros_consulta_municipios_serpro",
      path: "/demografia/municipios-serpro",
      description: "Consulta - Municípios Serpro",
      params: [
        {
          name: "uf",
          displayName: "Uf",
          type: "string",
          required: true,
          placeholder: "SP"
        }
      ]
    },
    {
      name: "Consulta - Municípios IBGE",
      value: "cadastros_consulta_municipios_ibge",
      path: "/demografia/municipios-ibge",
      description: "Consulta - Municípios IBGE",
      params: [
        {
          name: "uf",
          displayName: "Uf",
          type: "string",
          required: true,
          placeholder: "SP"
        }
      ]
    },
    {
      name: "Decodificar Documento Oficial (QRCode)",
      value: "cadastros_decodificar_documento_oficial_qrcode",
      path: "/documentos/decodificar",
      description: "Consulta - Decodificar Documento Oficial (QRCode)",
      params: [
        {
          name: "image_base64",
          displayName: "Image Base64",
          type: "string",
          required: true,
          placeholder: "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"
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
      name: "Consulta SINTEGRA - Nacional",
      value: "orgaos_consulta_sintegra_nacional",
      path: "/orgaos/sintegra",
      description: "Consulta SINTEGRA - Nacional",
      params: [
        {
          name: "cnpj_ie",
          displayName: "Cnpj Ie",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        },
        {
          name: "tipo",
          displayName: "Tipo",
          type: "string",
          required: true,
          placeholder: "CNPJ"
        },
        {
          name: "uf",
          displayName: "Uf",
          type: "string",
          required: true,
          placeholder: "SP"
        }
      ]
    },
    {
      name: "Consulta NFe",
      value: "orgaos_consulta_nfe",
      path: "/orgaos/nfe",
      description: "Consulta NFe",
      params: [
        {
          name: "chave",
          displayName: "Chave",
          type: "string",
          required: true,
          placeholder: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },
        {
          name: "baixarBoletos",
          displayName: "BaixarBoletos",
          type: "string",
          required: true,
          placeholder: "true"
        }
      ]
    },
    {
      name: "Consulta SUFRAMA - Nacional",
      value: "orgaos_consulta_suframa_nacional",
      path: "/orgaos/suframa",
      description: "Consulta SUFRAMA - Nacional",
      params: [
        {
          name: "cnpj",
          displayName: "Cnpj",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "Situação do CPF na Receita Federal",
      value: "orgaos_situacao_do_cpf_na_receita_federal",
      path: "/pessoas/situacao",
      description: "Situação do CPF na Receita Federal",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "data_nascimento",
          displayName: "Data Nascimento",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    },
    {
      name: "Situação do CNPJ na Receita Federal",
      value: "orgaos_situacao_do_cnpj_na_receita_federal",
      path: "/empresas/situacao",
      description: "Situação do CNPJ na Receita Federal",
      params: [
        {
          name: "cnpj",
          displayName: "Cnpj",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "Consulta de certidão debitos trabalhista",
      value: "orgaos_consulta_de_certidao_debitos_trabalhista",
      path: "/orgaos/certidao-debito-trabalhista",
      description: "Consulta de Certidão de Débitos Trabalhistas",
      params: [
        {
          name: "documento",
          displayName: "Documento",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Consulta de mandato de prisão CNJ",
      value: "orgaos_consulta_de_mandato_de_prisao_cnj",
      path: "/orgaos/mandados_cnj",
      description: "Consulta de mandados de prisão",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    }
  ],
  "Crédito": [
    {
      name: "Crédito Completa PF",
      value: "credito_credito_completa_pf",
      path: "/credito/credito-completa-pf",
      description: "Crédito Completa Pessoa Física (PF)",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Crédito Completa PJ",
      value: "credito_credito_completa_pj",
      path: "/credito/credito-completa-pj",
      description: "Crédito Completa Pessoa Jurídica (PJ)",
      params: [
        {
          name: "cnpj",
          displayName: "Cnpj",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "Restrição Score PF",
      value: "credito_restricao_score_pf",
      path: "/credito/restricao-score-pf",
      description: "Restrição Score PF",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Restrição Score PJ",
      value: "credito_restricao_score_pj",
      path: "/credito/restricao-score-pj",
      description: "Restrição Score PJ",
      params: [
        {
          name: "cnpj",
          displayName: "Cnpj",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "Localização Score",
      value: "credito_localizacao_score",
      path: "/credito/localizacao-score",
      description: "Localização Score",
      params: [
        {
          name: "documento",
          displayName: "Documento",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Endividamento Bancario (CPF/CNPJ)",
      value: "credito_endividamento_bancario_cpf_cnpj",
      path: "/credito/endividamento-bancario",
      description: "Consulta detalhada de dívidas e limites de crédito vinculados a CPF ou CNPJ no sistema bancário.",
      params: [
        {
          name: "documento",
          displayName: "Documento",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    }
  ],
  "Veículos > Informações": [
    {
      name: "Consulta nacional - Agregados",
      value: "veiculos_informacoes_consulta_nacional_agregados",
      path: "/veiculos/agregados",
      description: "Consulta nacional - Agregados",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        },
        {
          name: "chassi",
          displayName: "Chassi",
          type: "string",
          required: false,
          placeholder: "XXXXXXXXXXXXXXXXXX"
        },
        {
          name: "motor",
          displayName: "Motor",
          type: "string",
          required: false,
          placeholder: "XXXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Consulta nacional - Agregados V2",
      value: "veiculos_informacoes_consulta_nacional_agregados_v2",
      path: "/veiculos/agregados_v2",
      description: "Consulta nacional - Agregados",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        },
        {
          name: "chassi",
          displayName: "Chassi",
          type: "string",
          required: false,
          placeholder: "XXXXXXXXXXXXXXXXXX"
        },
        {
          name: "motor",
          displayName: "Motor",
          type: "string",
          required: false,
          placeholder: "XXXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Consulta nacional - BIN nacional",
      value: "veiculos_informacoes_consulta_nacional_bin_nacional",
      path: "/veiculos/bin-nacional",
      description: "Consulta de veículos - BIN Nacional",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - BIN nacional V2",
      value: "veiculos_informacoes_consulta_nacional_bin_nacional_v2",
      path: "/veiculos/bin-nacional-v2",
      description: "Consulta de veículos - BIN Nacional V2",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Base Estadual",
      value: "veiculos_informacoes_consulta_nacional_base_estadual",
      path: "/veiculos/bin-estadual",
      description: "Consulta de veículos - BIN Estadual",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Base Nacional V2",
      value: "veiculos_informacoes_consulta_nacional_base_nacional_v2",
      path: "/veiculos/base-nacional-v2",
      description: "Consulta nacional - Base Nacional",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Basica",
      value: "veiculos_informacoes_consulta_nacional_basica",
      path: "/veiculos/informacao-basica",
      description: "Consulta básica do veículo pela placa (Nacional)",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Consulta Veiculo 0km",
      value: "veiculos_informacoes_consulta_nacional_consulta_veiculo_0km",
      path: "/veiculos/consulta-0km",
      description: "Consulta Veiculo 0km pelo Chassi",
      params: [
        {
          name: "chassi",
          displayName: "Chassi",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Consulta nacional - Basica V2",
      value: "veiculos_informacoes_consulta_nacional_basica_v2",
      path: "/veiculos/informacao-basica-v2",
      description: "Consulta básica do veículo pela placa (V2)",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Proprietário / Ano último licenciamento",
      value: "veiculos_informacoes_consulta_nacional_proprietario_ano_ultimo_licenciamento",
      path: "/veiculos/proprietario-ano-licenciamento",
      description: "Consulta nacional - Proprietário / Ano último licenciamento",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Proprietário Atual",
      value: "veiculos_informacoes_consulta_nacional_proprietario_atual",
      path: "/veiculos/proprietario-atual",
      description: "Consulta nacional - Proprietário Atual",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        }
      ]
    },
    {
      name: "Consulta nacional - Simples V2",
      value: "veiculos_informacoes_consulta_nacional_simples_v2",
      path: "/veiculos/informacao-simples-v2",
      description: "Consulta de veículos - Nacional Simples V2",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Infracoes V3",
      value: "veiculos_informacoes_consulta_nacional_infracoes_v3",
      path: "/veiculos/infracoes-v3",
      description: "Consulta de veículos - Infracoes V3",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "000-XXXX"
        }
      ]
    },
    {
      name: "Consulta nacional - Informações por Renavam",
      value: "veiculos_informacoes_consulta_nacional_informacoes_por_renavam",
      path: "/veiculos/informacao-por-renavam",
      description: "Consulta nacional - Informações por Renavam",
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
      name: "Consulta nacional - Decodificação de chassi",
      value: "veiculos_informacoes_consulta_nacional_decodificacao_de_chassi",
      path: "/veiculos/decodificar-chassi",
      description: "Consulta nacional - Decodificação de chassi",
      params: [
        {
          name: "chassi",
          displayName: "Chassi",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Consulta nacional - Decodificação de Motor",
      value: "veiculos_informacoes_consulta_nacional_decodificacao_de_motor",
      path: "/veiculos/decodificar-motor",
      description: "Consulta nacional - Decodificação de Motor",
      params: [
        {
          name: "motor",
          displayName: "Motor",
          type: "string",
          required: true,
          placeholder: "XXXXXXXX"
        }
      ]
    },
    {
      name: "Consulta nacional - Cronotacógrafo",
      value: "veiculos_informacoes_consulta_nacional_cronotacografo",
      path: "/veiculos/cronotacografo",
      description: "Consulta de veículos - Cronotacógrafo Nacional",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Gravames V2",
      value: "veiculos_informacoes_consulta_nacional_gravames_v2",
      path: "/veiculos/gravames-v2",
      description: "Consulta de veículos - Gravames Nacional V2",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Gravames V3",
      value: "veiculos_informacoes_consulta_nacional_gravames_v3",
      path: "/veiculos/gravames-v3",
      description: "Consulta Nacional - Gravames V3",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "JSN2936"
        }
      ]
    },
    {
      name: "Consulta nacional - Histórico de Gravames",
      value: "veiculos_informacoes_consulta_nacional_historico_de_gravames",
      path: "/veiculos/historico_gravames",
      description: "Consulta de veículos - Histórico de Gravames",
      params: [
        {
          name: "chassi",
          displayName: "Chassi",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXXXXXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Consulta nacional - UF da placa",
      value: "veiculos_informacoes_consulta_nacional_uf_da_placa",
      path: "/veiculos/uf-placa",
      description: "Consulta de veículos - UF da placa Nacional",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        }
      ]
    },
    {
      name: "Consulta nacional - Marcas",
      value: "veiculos_informacoes_consulta_nacional_marcas",
      path: "/veiculos/marcas",
      description: "Consulta de veículos – Marcas por tipo",
      params: [
        {
          name: "tipo",
          displayName: "Tipo",
          type: "string",
          required: true,
          placeholder: "carro"
        }
      ]
    },
    {
      name: "Consulta nacional - Modelos",
      value: "veiculos_informacoes_consulta_nacional_modelos",
      path: "/veiculos/modelos",
      description: "Consulta de veículos – Modelos por tipo e marca",
      params: [
        {
          name: "tipo",
          displayName: "Tipo",
          type: "string",
          required: true,
          placeholder: "moto"
        },
        {
          name: "marca",
          displayName: "Marca",
          type: "string",
          required: true,
          placeholder: "bmw"
        }
      ]
    },
    {
      name: "Consulta nacional - Recall",
      value: "veiculos_informacoes_consulta_nacional_recall",
      path: "/veiculos/recall",
      description: "Consulta de veículos - Recall Nacional",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Renavam",
      value: "veiculos_informacoes_consulta_nacional_renavam",
      path: "/veiculos/renavam",
      description: "Consulta de veículos - Renavam Nacional",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Renavam V2",
      value: "veiculos_informacoes_consulta_nacional_renavam_v2",
      path: "/veiculos/renavam-v2",
      description: "Consulta de veículos - Renavam Nacional V2",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Leilão",
      value: "veiculos_informacoes_consulta_nacional_leilao",
      path: "/veiculos/leilao",
      description: "Consulta de veículos- Leilão",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Indício de Roubo e Furto",
      value: "veiculos_informacoes_consulta_nacional_indicio_de_roubo_e_furto",
      path: "/veiculos/indicio-roubo-furto",
      description: "Consulta de veículos- Indício de Roubo e Furto",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Indício de Sinistro",
      value: "veiculos_informacoes_consulta_nacional_indicio_de_sinistro",
      path: "/veiculos/sinistro",
      description: "Consulta de veículos- Indício de Sinistro",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Roubo e Furto",
      value: "veiculos_informacoes_consulta_nacional_roubo_e_furto",
      path: "/veiculos/roubo_furto",
      description: "Consulta de veículos- Roubo e Furto",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta nacional - Histórico FIPE",
      value: "veiculos_informacoes_consulta_nacional_historico_fipe",
      path: "/veiculos/historico-fipe",
      description: "Consulta nacional - Histórico FIPE",
      params: [
        {
          name: "codigo_fipe",
          displayName: "Codigo Fipe",
          type: "string",
          required: true,
          placeholder: "XXXXXX-X"
        },
        {
          name: "ano_fabricacao",
          displayName: "Ano Fabricacao",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "ano_modelo",
          displayName: "Ano Modelo",
          type: "string",
          required: true,
          placeholder: "XXXX"
        }
      ]
    },
    {
      name: "Consulta Nacional - Renajud V3",
      value: "veiculos_informacoes_consulta_nacional_renajud_v3",
      path: "/veiculos/renajud-v3",
      description: "Consulta Nacional - Renajud V3",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Consulta Nacional - Renajud V4",
      value: "veiculos_informacoes_consulta_nacional_renajud_v4",
      path: "/veiculos/renajud-v4",
      description: "Consulta Nacional - Renajud V4",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "FAW9874"
        }
      ]
    },
    {
      name: "Certificado de Segurança Veicular - CSV",
      value: "veiculos_informacoes_certificado_de_seguranca_veicular_csv",
      path: "/veiculos/csv",
      description: "Certificado de Segurança Veicular - CSV",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Documento",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consulta Nacional - Veículos por documento (CPF/CNPJ)",
      value: "veiculos_informacoes_consulta_nacional_veiculos_por_documento_cpf_cnpj",
      path: "/pessoas/veiculos",
      description: "Consulta Nacional - Veículos por Documento (CPF/CNPJ)",
      params: [
        {
          name: "documento",
          displayName: "Documento",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consulta Nacional - Veículos por documento (CPF/CNPJ) - V2",
      value: "veiculos_informacoes_consulta_nacional_veiculos_por_documento_cpf_cnpj_v2",
      path: "/pessoas/veiculos_v2",
      description: "Consulta Nacional - Veículos por documento (CPF/CNPJ) - V2",
      params: [
        {
          name: "documento",
          displayName: "Documento",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consulta Nacional - Veículos Histórico Proprietários",
      value: "veiculos_informacoes_consulta_nacional_veiculos_historico_proprietarios",
      path: "/veiculos/historico-proprietario",
      description: "Consulta de Histórico de Proprietários",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de Débitos - Amapá",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de Débitos - Acre",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de Débitos - Alagoas",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de Débitos - Amazonas",
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
          displayName: "Placa",
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
      description: "Consulta de Débitos - Ceará",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Documento",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Distrito Federal",
      value: "veiculos_debitos_distrito_federal",
      path: "/debitos/df",
      description: "Consulta de Débitos - Distrito Federal",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de Débitos - Espírito Santo",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de Débitos - Goiás",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      name: "Minas Gerais (IPVA/Licenciamento)",
      value: "veiculos_debitos_minas_gerais_ipva_licenciamento",
      path: "/debitos/mg-simples",
      description: "Consulta de Débitos - Minas Gerais (IPVA/Licenciamento)",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de Débitos - Maranhão",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Documento",
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
      description: "Consulta de Débitos - Mato Grosso",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Documento",
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
      description: "Consulta de Débitos - Mato Grosso do Sul",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Documento",
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
      description: "Consulta de Débitos - Pará",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de débitos de Veículo - Paraíba",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Documento",
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
      description: "Consulta de débitos de Veículo - Paraná",
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
      description: "Consulta de débitos de Veículo - Piauí",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de débitos de Veículo - Rio de Janeiro",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Documento",
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
      description: "Consulta de débitos de Veículo - Rio Grande do Norte",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de débitos de Veículo - Rondônia",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Documento",
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
      description: "Consulta de débitos de Veículo - Roraima",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de débitos de Veículo - Santa Catarina",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Chassi",
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
      description: "Consulta de débitos de Veículo - Santa Catarina V2",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de Débitos - São Paulo",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de débitos de Veículo - Tocantins",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Documento",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXXX"
        }
      ]
    }
  ],
  "Veículos > Orgãos > ANTT - Prod. Perigosos": [
    {
      name: "Certificado - CTPP",
      value: "veiculos_orgaos_antt_prod_perigosos_certificado_ctpp",
      path: "/orgaos/consulta-antt-ctpp",
      description: "Consulta de Certificado - Certificado de Produtos Perigosos",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        },
        {
          name: "certificado",
          displayName: "Certificado",
          type: "string",
          required: false,
          placeholder: "XXXXX"
        },
        {
          name: "equipamento",
          displayName: "Equipamento",
          type: "string",
          required: false,
          placeholder: "XXXXX"
        }
      ]
    },
    {
      name: "Certificado - CIPP",
      value: "veiculos_orgaos_antt_prod_perigosos_certificado_cipp",
      path: "/orgaos/consulta-antt-cipp",
      description: "Consulta de Certificado - Certificado de Inspeção de Produtos Perigosos",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        },
        {
          name: "certificado",
          displayName: "Certificado",
          type: "string",
          required: false,
          placeholder: "XXXXX"
        },
        {
          name: "equipamento",
          displayName: "Equipamento",
          type: "string",
          required: false,
          placeholder: "XXXXX"
        }
      ]
    },
    {
      name: "Certificado - CIV",
      value: "veiculos_orgaos_antt_prod_perigosos_certificado_civ",
      path: "/orgaos/consulta-antt-civ",
      description: "Consulta de Certificado - Certificado de Inspeção Veicular.",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-XXXX"
        },
        {
          name: "certificado",
          displayName: "Certificado",
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
      name: "ANTT Veículo",
      value: "veiculos_orgaos_antt_veiculo",
      path: "/orgaos/antt-veiculo",
      description: "Consulta de Veículo - ANTT",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Documento",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "ANTT Transportador",
      value: "veiculos_orgaos_antt_transportador",
      path: "/orgaos/antt-transportador",
      description: "Consulta de Transportador - ANTT",
      params: [
        {
          name: "documento",
          displayName: "Documento",
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
      description: "Consulta de Notificações - DER",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de Notificações - DER PR",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Detran SP - Acompanhamento de Processo Veicular",
      value: "veiculos_orgaos_detran_sp_acompanhamento_de_processo_veicular",
      path: "/orgaos/detran-sp-acompanhamento",
      description: "Detran SP - Acompanhamento de Processo Veicular",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Documento",
          type: "string",
          required: false,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Licenciamento Veicular - Rio de Janeiro",
      value: "veiculos_orgaos_licenciamento_veicular_rio_de_janeiro",
      path: "/orgaos/licenciamento-rj",
      description: "Consulta de Licenciamento Veicular - Rio de Janeiro",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Licenciamento Veicular - Paraná",
      value: "veiculos_orgaos_licenciamento_veicular_parana",
      path: "/orgaos/licenciamento-pr",
      description: "Consulta de Licenciamento Veicular - Paraná",
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
      name: "Licenciamento Veicular - Minas Gerais",
      value: "veiculos_orgaos_licenciamento_veicular_minas_gerais",
      path: "/veiculos/licenciamento-mg",
      description: "Consulta de Licenciamento Veicular - Minas Gerais",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXXXXXX"
        },
        {
          name: "chassi",
          displayName: "Chassi",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Licenciamento Veicular - Ceará",
      value: "veiculos_orgaos_licenciamento_veicular_ceara",
      path: "/veiculos/licenciamento-ce",
      description: "Consulta de Licenciamento Veicular - Ceará",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXXXXXX"
        }
      ]
    },
    {
      name: "Licenciamento Veicular - Distrito Federal",
      value: "veiculos_orgaos_licenciamento_veicular_distrito_federal",
      path: "/veiculos/licenciamento-df",
      description: "Consulta de Licenciamento Veicular - Ceará",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      name: "Licenciamento Veicular - Tocantins",
      value: "veiculos_orgaos_licenciamento_veicular_tocantins",
      path: "/veiculos/licenciamento-to",
      description: "Consulta de Licenciamento Veicular - Tocantins",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Documento",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Licenciamento Veicular - Roraima",
      value: "veiculos_orgaos_licenciamento_veicular_roraima",
      path: "/veiculos/licenciamento-rr",
      description: "Consulta de Licenciamento Veicular - Roraima",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      description: "Consulta de Notificações - PRF",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      name: "Procuradoria Geral do Estado de  São Paulo",
      value: "veiculos_orgaos_procuradoria_geral_do_estado_de_sao_paulo",
      path: "/orgaos/pge-sp",
      description: "Consulta de Débitos em dívida ativa - P.G.E. SP",
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
      name: "Emissão de CRLVe (AC)",
      value: "veiculos_documentos_emissao_de_crlve_ac",
      path: "/veiculos/documentos-crlve-ac",
      description: "Emissão de CRLV-e (AC) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (AL)",
      value: "veiculos_documentos_emissao_de_crlve_al",
      path: "/veiculos/documentos-crlve-al",
      description: "Emissão de CRLV-e (AL) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (AM)",
      value: "veiculos_documentos_emissao_de_crlve_am",
      path: "/veiculos/documentos-crlve-am",
      description: "Emissão de CRLV-e (AM) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (AP)",
      value: "veiculos_documentos_emissao_de_crlve_ap",
      path: "/veiculos/documentos-crlve-ap",
      description: "Emissão de CRLVe (AP)",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Documento",
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
      name: "Emissão de CRLVe (BA)",
      value: "veiculos_documentos_emissao_de_crlve_ba",
      path: "/veiculos/documentos-crlve-ba-v2",
      description: "Emissão de CRLV-e (BA) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (BA) PF",
      value: "veiculos_documentos_emissao_de_crlve_ba_pf",
      path: "/veiculos/documentos-crlve-ba-pf",
      description: "Emissão de CRLVe (BA) PF",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (CE)",
      value: "veiculos_documentos_emissao_de_crlve_ce",
      path: "/veiculos/documentos-crlve-ce",
      description: "Emissão de CRLVe (CE) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (DF)",
      value: "veiculos_documentos_emissao_de_crlve_df",
      path: "/veiculos/documentos-crlve-df",
      description: "Emissão de CRLVe (DF) somente PF \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (ES)",
      value: "veiculos_documentos_emissao_de_crlve_es",
      path: "/veiculos/documentos-crlve-es",
      description: "Emissão de CRLVe (ES) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Documento",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (GO) V2",
      value: "veiculos_documentos_emissao_de_crlve_go_v2",
      path: "/veiculos/documentos-crlve-go-v2",
      description: "Emissão de CRLVe (GO) V2 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (MA)",
      value: "veiculos_documentos_emissao_de_crlve_ma",
      path: "/veiculos/documentos-crlve-ma",
      description: "Emissão de CRLVe (MA)",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Documento",
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
      name: "Emissão de CRLVe (MT)",
      value: "veiculos_documentos_emissao_de_crlve_mt",
      path: "/veiculos/documentos-crlve-mt",
      description: "Emissão de CRLVe (MT)",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Documento",
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
      name: "Emissão de CRLVe (MG)",
      value: "veiculos_documentos_emissao_de_crlve_mg",
      path: "/veiculos/documentos-crlve-mg",
      description: "Emissão de CRLVe (MG)",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (MG) V2",
      value: "veiculos_documentos_emissao_de_crlve_mg_v2",
      path: "/veiculos/documentos-crlve-mg-v2",
      description: "Emissão de CRLVe (MG) V2 sem o num. do CRV",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Documento",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (MG) V3",
      value: "veiculos_documentos_emissao_de_crlve_mg_v3",
      path: "/veiculos/documentos-crlve-mg-v3",
      description: "Emissão de CRLVe (MG) V3",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Documento",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (MS)",
      value: "veiculos_documentos_emissao_de_crlve_ms",
      path: "/veiculos/documentos-crlve-ms",
      description: "Emissão de CRLVe (MS) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Num Crv",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXXX"
        },
        {
          name: "cod_seg_crv",
          displayName: "Cod Seg Crv",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (MS) V2",
      value: "veiculos_documentos_emissao_de_crlve_ms_v2",
      path: "/veiculos/documentos-crlve-ms-v2",
      description: "Emissão de CRLV-e (MS) V2 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (PA)",
      value: "veiculos_documentos_emissao_de_crlve_pa",
      path: "/veiculos/documentos-crlve-pa",
      description: "Emissão de CRLVe (PA)",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Documento",
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
      name: "Emissão de CRLVe (PB)",
      value: "veiculos_documentos_emissao_de_crlve_pb",
      path: "/veiculos/documentos-crlve-pb",
      description: "Emissão de CRLVe (PB) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (PE) V3",
      value: "veiculos_documentos_emissao_de_crlve_pe_v3",
      path: "/veiculos/documentos-crlve-pe-v3",
      description: "Emissão de CRLV-e (PE) V3 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (PR) PJ",
      value: "veiculos_documentos_emissao_de_crlve_pr_pj",
      path: "/veiculos/documentos-crlve-pr-pj",
      description: "Emissão de CRLVe (PR) - PJ",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Documento",
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
      name: "Emissão de CRLVe (PR) V2",
      value: "veiculos_documentos_emissao_de_crlve_pr_v2",
      path: "/veiculos/documentos-crlve-pr-v2",
      description: "Emissão de CRLV-e (PR) V2",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      name: "Emissão de CRLVe (PI)",
      value: "veiculos_documentos_emissao_de_crlve_pi",
      path: "/veiculos/documentos-crlve-pi",
      description: "Emissão de CRLVe (PI)",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
      name: "Emissão de CRLVe (RN) V2",
      value: "veiculos_documentos_emissao_de_crlve_rn_v2",
      path: "/veiculos/documentos-crlve-rn-v2",
      description: "Emissão de CRLVe (RN) V2 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (RJ) V2",
      value: "veiculos_documentos_emissao_de_crlve_rj_v2",
      path: "/veiculos/documentos-crlve-rj-v2",
      description: "Emissão de CRLV-e (RJ) V2 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (RJ) - Flash",
      value: "veiculos_documentos_emissao_de_crlve_rj_flash",
      path: "/veiculos/documentos-crlve-rj-flash",
      description: "Emissão de CRLVe (RJ) - Flash \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (RR)",
      value: "veiculos_documentos_emissao_de_crlve_rr",
      path: "/veiculos/documentos-crlve-rr",
      description: "Emissão de CRLVe (RR) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (RS) V2",
      value: "veiculos_documentos_emissao_de_crlve_rs_v2",
      path: "/veiculos/documentos-crlve-rs-v2",
      description: "Emissão de CRLV-e (RS) V2 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (SC) V2",
      value: "veiculos_documentos_emissao_de_crlve_sc_v2",
      path: "/veiculos/documentos-crlve-sc-v2",
      description: "Emissão de CRLV-e (SC) V2 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (SE)",
      value: "veiculos_documentos_emissao_de_crlve_se",
      path: "/veiculos/documentos-crlve-se",
      description: "Emissão de CRLVe (SE) \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    },
    {
      name: "Emissão de CRLVe (SP) V4",
      value: "veiculos_documentos_emissao_de_crlve_sp_v4",
      path: "/veiculos/documentos-crlve-sp-v4",
      description: "Emissão de CRLVe (SP) V4 \\[ASYNC_TASK\\]",
      params: [
        {
          name: "placa",
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        },
        {
          name: "documento",
          displayName: "Documento",
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
      name: "Emissão de CRLVe (TO)",
      value: "veiculos_documentos_emissao_de_crlve_to",
      path: "/veiculos/documentos-crlve-to",
      description: "Emissão de CRLVe (TO)",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Documento",
          type: "string",
          required: true,
          placeholder: "XX.XXX.XXX/XXXX-XX"
        }
      ]
    },
    {
      name: "Comunicação / Comunicado de venda V2",
      value: "veiculos_documentos_comunicacao_comunicado_de_venda_v2",
      path: "/veiculos/comunicado_venda_v2",
      description: "Comunicação / Comunicado de Venda",
      params: [
        {
          name: "veiculo[placa]",
          displayName: "Veiculo Placa",
          type: "string",
          required: true,
          placeholder: "ABC1234"
        },
        {
          name: "veiculo[renavam]",
          displayName: "Veiculo Renavam",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "veiculo[ano_fabricacao]",
          displayName: "Veiculo Ano Fabricacao",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "veiculo[ano_modelo]",
          displayName: "Veiculo Ano Modelo",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "veiculo[numero_crv]",
          displayName: "Veiculo Numero Crv",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "veiculo[data_emissao_crv]",
          displayName: "Veiculo Data Emissao Crv",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "veiculo[n_via_crv]",
          displayName: "Veiculo N Via Crv",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "veiculo[cod_seguranca_crv]",
          displayName: "Veiculo Cod Seguranca Crv",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "veiculo[uf]",
          displayName: "Veiculo Uf",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "vendedor[nome]",
          displayName: "Vendedor Nome",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "vendedor[documento]",
          displayName: "Vendedor Documento",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "vendedor[cidade]",
          displayName: "Vendedor Cidade",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "vendedor[uf]",
          displayName: "Vendedor Uf",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[nome]",
          displayName: "Comprador Nome",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[documento]",
          displayName: "Comprador Documento",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[endereco][cep]",
          displayName: "Comprador Endereco Cep",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[endereco][logradouro]",
          displayName: "Comprador Endereco Logradouro",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[endereco][numero]",
          displayName: "Comprador Endereco Numero",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[endereco][bairro]",
          displayName: "Comprador Endereco Bairro",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[endereco][complemento]",
          displayName: "Comprador Endereco Complemento",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[endereco][uf]",
          displayName: "Comprador Endereco Uf",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprador[endereco][cidade]",
          displayName: "Comprador Endereco Cidade",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "venda[data]",
          displayName: "Venda Data",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "venda[valor]",
          displayName: "Venda Valor",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "comprovante",
          displayName: "Comprovante",
          type: "string",
          required: true,
          placeholder: "XXXX (PDF BASE64 do APTV-e e/ou CVE frente e verso)"
        },
        {
          name: "request_uid",
          displayName: "Request Uid",
          type: "string",
          required: false,
          placeholder: "XXXXXXXXX"
        }
      ]
    },
    {
      name: "Cancelar Comunicação / Comunicado de venda V2",
      value: "veiculos_documentos_cancelar_comunicacao_comunicado_de_venda_v2",
      path: "/veiculos/cancelar_comunicado_venda_v2",
      description: "Cancelar Comunicação / Comunicado de Venda",
      params: [
        {
          name: "placa",
          displayName: "Placa",
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
          displayName: "Numero Crv",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "num_transacao",
          displayName: "Num Transacao",
          type: "string",
          required: true,
          placeholder: "XXXXXX"
        },
        {
          name: "motivo_cancelamento",
          displayName: "Motivo Cancelamento",
          type: "string",
          required: true,
          placeholder: "XXXX"
        }
      ]
    }
  ],
  "Veículos > Divida Ativida": [
    {
      name: "Consulta - Divida Ativa São Paulo ",
      value: "veiculos_divida_ativida_consulta_divida_ativa_sao_paulo",
      path: "/dividaativa/sp",
      description: "Consulta - Dívida Ativa São Paulo|",
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
      name: "Consulta - Divida Ativa Rio de Janeiro",
      value: "veiculos_divida_ativida_consulta_divida_ativa_rio_de_janeiro",
      path: "/dividaativa/rj",
      description: "Consulta - Dívida Ativa Rio de Janeiro|",
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
      name: "Consulta - Divida Ativa Distrito Federal",
      value: "veiculos_divida_ativida_consulta_divida_ativa_distrito_federal",
      path: "/dividaativa/df",
      description: "Consulta - Dívida Ativa Distrito Federal|",
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
          displayName: "Placa",
          type: "string",
          required: true,
          placeholder: "XXX-0000"
        }
      ]
    }
  ],
  "CNH > Nacional": [
    {
      name: "Consulta Nacional - Simples",
      value: "cnh_nacional_consulta_nacional_simples",
      path: "/cnh/nacional-simples",
      description: "Consulta Nacional - Simples",
      params: [
        {
          name: "cnh",
          displayName: "Cnh",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "data_nascimento",
          displayName: "Data Nascimento",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    },
    {
      name: "Consulta Nacional - Completa V2",
      value: "cnh_nacional_consulta_nacional_completa_v2",
      path: "/cnh/nacional-completa-v2",
      description: "Consulta Nacional - Completa V2",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consulta Nacional - Completa via CNH V2",
      value: "cnh_nacional_consulta_nacional_completa_via_cnh_v2",
      path: "/cnh/nacional-completa-cnh-v2",
      description: "Consulta Nacional - Completa via CNH V2",
      params: [
        {
          name: "cnh",
          displayName: "Cnh",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Consulta Nacional - Completa V3",
      value: "cnh_nacional_consulta_nacional_completa_v3",
      path: "/cnh/nacional_completa_v3",
      description: "Consulta Nacional - Completa V3",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consulta Nacional - Completa V4 (CPF)",
      value: "cnh_nacional_consulta_nacional_completa_v4_cpf",
      path: "/cnh/nacional-completa-v4",
      description: "Consulta Nacional - Completa V4",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Consulta Nacional - Simples V2",
      value: "cnh_nacional_consulta_nacional_simples_v2",
      path: "/cnh/nacional-simples-v2",
      description: "**Consulta Nacional - Simples V2**",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    }
  ],
  "CNH > Paraná": [
    {
      name: "Consulta completa",
      value: "cnh_parana_consulta_completa",
      path: "/cnh/pr-completa",
      description: "**Consulta completa**",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "Cnh",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "data_validade_cnh",
          displayName: "Data Validade Cnh",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    },
    {
      name: "Consulta completa V2",
      value: "cnh_parana_consulta_completa_v2",
      path: "/cnh/pr-completa-v2",
      description: "**Consulta completa V2**",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "Cnh",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "data_validade_cnh",
          displayName: "Data Validade Cnh",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    },
    {
      name: "Cassacao",
      value: "cnh_parana_cassacao",
      path: "/cnh/pr-cassacao",
      description: "Cassação - Paraná|",
      params: [
        {
          name: "data_inicial",
          displayName: "Data Inicial",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        },
        {
          name: "data_final",
          displayName: "Data Final",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    }
  ],
  "CNH > Rio Grande do Sul": [
    {
      name: "Cassacao",
      value: "cnh_rio_grande_do_sul_cassacao",
      path: "/cnh/rs-cassacao",
      description: "Cassacao - Rio Grande do Sul",
      params: [
        {
          name: "data_inicial",
          displayName: "Data Inicial",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        },
        {
          name: "data_final",
          displayName: "Data Final",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    }
  ],
  CNH: [
    {
      name: "Acre completa",
      value: "cnh_acre_completa",
      path: "/cnh/ac-completa",
      description: "Consulta CNH Completa - Acre",
      params: [
        {
          name: "nome",
          displayName: "Nome",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX XXXXXXXXX XXXXX"
        },
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Alagoas completa",
      value: "cnh_alagoas_completa",
      path: "/cnh/al-completa",
      description: "Consulta CNH Completa - Alagoas",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "data_nascimento",
          displayName: "Data Nascimento",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        },
        {
          name: "cod_municipio_nascimento",
          displayName: "Cod Municipio Nascimento",
          type: "string",
          required: true,
          placeholder: "XXXX"
        },
        {
          name: "uf_nascimento",
          displayName: "Uf Nascimento",
          type: "string",
          required: true,
          placeholder: "XX"
        }
      ]
    },
    {
      name: "Amazonas completa",
      value: "cnh_amazonas_completa",
      path: "/cnh/am-completa",
      description: "Consulta CNH Completa - Amazonas",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "Cnh",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Amapá completa",
      value: "cnh_amapa_completa",
      path: "/cnh/ap-completa",
      description: "Consulta CNH Completa - Amapá",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "nome",
          displayName: "Nome",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX XXXXXXXXX XXXXX"
        },
        {
          name: "data_nascimento",
          displayName: "Data Nascimento",
          type: "string",
          required: true,
          placeholder: "XX/XX/XX"
        }
      ]
    },
    {
      name: "Ceará completa",
      value: "cnh_ceara_completa",
      path: "/cnh/ce-completa",
      description: "Consulta CNH Completa - Ceará",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "formulario",
          displayName: "Formulario",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Goiás completa",
      value: "cnh_goias_completa",
      path: "/cnh/go-completa",
      description: "Consulta CNH Completa - Goiás",
      params: [
        {
          name: "cnh",
          displayName: "Cnh",
          type: "string",
          required: true,
          placeholder: "03614904269"
        }
      ]
    },
    {
      name: "Maranhão completa",
      value: "cnh_maranhao_completa",
      path: "/cnh/ma-completa",
      description: "Consulta CNH Completa - Maranhão",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "Cnh",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Mato Grosso Completa",
      value: "cnh_mato_grosso_completa",
      path: "/cnh/mt-completa",
      description: "Consulta CNH Completa - Mato Grosso",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
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
      name: "Mato Grosso do Sul Completa",
      value: "cnh_mato_grosso_do_sul_completa",
      path: "/cnh/ms-completa",
      description: "Consulta CNH Completa - Mato Grosso do Sul",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "Cnh",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Pará Completa",
      value: "cnh_para_completa",
      path: "/cnh/pa-completa",
      description: "Consulta CNH Completa - Pará",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "Cnh",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Paraíba Completa",
      value: "cnh_paraiba_completa",
      path: "/cnh/pb-completa",
      description: "Consulta CNH Completa - Paraíba",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        }
      ]
    },
    {
      name: "Rio de Janeiro Completa",
      value: "cnh_rio_de_janeiro_completa",
      path: "/cnh/rj-completa",
      description: "Consulta CNH Completa - Rio de Janeiro",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "Cnh",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Rio Grande do Norte Completa",
      value: "cnh_rio_grande_do_norte_completa",
      path: "/cnh/rn-completa",
      description: "Consulta CNH Completa - Rio Grande do Norte",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "cnh",
          displayName: "Cnh",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        }
      ]
    },
    {
      name: "Sergipe Completa",
      value: "cnh_sergipe_completa",
      path: "/cnh/se-completa",
      description: "Consulta CNH Completa - Sergipe",
      params: [
        {
          name: "cnh",
          displayName: "Cnh",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXXX"
        },
        {
          name: "registro",
          displayName: "Registro",
          type: "string",
          required: true,
          placeholder: "XXXXXXXXXX"
        },
        {
          name: "data_nascimento",
          displayName: "Data Nascimento",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    },
    {
      name: "Tocantins Completa",
      value: "cnh_tocantins_completa",
      path: "/cnh/to-completa",
      description: "Consulta CNH Completa - Tocantins",
      params: [
        {
          name: "cpf",
          displayName: "Cpf",
          type: "string",
          required: true,
          placeholder: "XXX.XXX.XXX-XX"
        },
        {
          name: "data_nascimento",
          displayName: "Data Nascimento",
          type: "string",
          required: true,
          placeholder: "XX/XX/XXXX"
        }
      ]
    }
  ],
  Inmetro: [
    {
      name: "Consulta dados de aferição de medidores de velocidade Inmetro",
      value: "inmetro_consulta_dados_de_afericao_de_medidores_de_velocidade_inmetro",
      path: "/orgaos/medidor-velocidade",
      description: "Consulta Medidor de Velocidade - Inmetro",
      params: [
        {
          name: "numero_inmetro",
          displayName: "Numero Inmetro",
          type: "string",
          required: true,
          placeholder: "XXXXXXXX"
        }
      ]
    }
  ],
  "Reclame Aqui": [
    {
      name: "Buscar empresas",
      value: "reclame_aqui_buscar_empresas",
      path: "/reclameaqui/buscar",
      description: "Buscar Empresas",
      params: [
        {
          name: "texto",
          displayName: "Texto",
          type: "string",
          required: true,
          placeholder: "Kabum"
        }
      ]
    },
    {
      name: "Detalhes de uma empresa",
      value: "reclame_aqui_detalhes_de_uma_empresa",
      path: "/reclameaqui/empresa",
      description: "Detalhes de uma Empresa",
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
      name: "Cupons oferecidos pela empresa",
      value: "reclame_aqui_cupons_oferecidos_pela_empresa",
      path: "/reclameaqui/cupons",
      description: "Cupons oferecidos pela empresa",
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
      name: "Buscar reclamações",
      value: "reclame_aqui_buscar_reclamacoes",
      path: "/reclameaqui/reclamacoes",
      description: "Buscar Reclamações",
      params: [
        {
          name: "id",
          displayName: "Id",
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
      name: "Detalhes da reclamação",
      value: "reclame_aqui_detalhes_da_reclamacao",
      path: "/reclameaqui/reclamacao",
      description: "Detalhes da Reclamação",
      params: [
        {
          name: "id",
          displayName: "Id",
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
    "name": "Conta",
    "value": "Conta"
  },
  {
    "name": "Assíncrono",
    "value": "Assíncrono"
  },
  {
    "name": "Cadastros",
    "value": "Cadastros"
  },
  {
    "name": "Orgãos",
    "value": "Orgãos"
  },
  {
    "name": "Crédito",
    "value": "Crédito"
  },
  {
    "name": "Veículos > Informações",
    "value": "Veículos > Informações"
  },
  {
    "name": "Veículos > Débitos",
    "value": "Veículos > Débitos"
  },
  {
    "name": "Veículos > Orgãos > ANTT - Prod. Perigosos",
    "value": "Veículos > Orgãos > ANTT - Prod. Perigosos"
  },
  {
    "name": "Veículos > Orgãos",
    "value": "Veículos > Orgãos"
  },
  {
    "name": "Veículos > Documentos",
    "value": "Veículos > Documentos"
  },
  {
    "name": "Veículos > Divida Ativida",
    "value": "Veículos > Divida Ativida"
  },
  {
    "name": "CNH > Nacional",
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
