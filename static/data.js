var INPUT_DATA = {
  api_version: '2.0',
  chart: {
    id: '1',
    name: 'SEFAZ',
    description: 'SECRETARIA DE ESTADO DE FAZENDA',
    parent_id: '',
    staff_department: 'N',
    manager_id: 'B01',
    dataFields: [{ name: 'Location', value: '', type: 'text' }],
    children: [
      {
        id: '2',
        name: 'ASSESSORIA DA SAT',
        description: 'ASSESSORIA DA SAT',
        parent_id: '1',
        staff_department: 'Y',
        manager_id: 'B01',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [],
        showChildren: true
      },
      {
        id: '3',
        name: 'CIDEC',
        description:
          'COORDENADORIA ESPECIAL DE INCENTIVOS FISCAIS E DESENVOLVIMENTO ECONÔMICO',
        parent_id: '1',
        staff_department: 'Y',
        manager_id: 'B01',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [],
        showChildren: false
      },
      {
        id: '4',
        name: 'COTEPE_CONFAZ',
        description: 'ASSESSORIA DE REPRESENTAÇÃO NA COTEPE',
        parent_id: '1',
        staff_department: 'Y',
        manager_id: 'B01',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [],
        showChildren: false
      },
      {
        id: '5',
        name: 'GABINETE DO SECRETÁRIO-ADJUNTO',
        description: 'GABINETE DO SECRETÁRIO-ADJUNTO',
        parent_id: '1',
        staff_department: 'Y',
        manager_id: 'B01',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [],
        showChildren: false
      },
      {
        id: '6',
        name: 'ASSESSORIA LEGISLATIVA',
        description: 'ASSESSORIA LEGISLATIVA',
        parent_id: '1',
        staff_department: 'Y',
        manager_id: 'B01',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [],
        showChildren: false
      },
      {
        id: '7',
        name: 'SAT',
        description: 'SUPERINTENDENCIA DE ADMINISTRAÇÃO TRIBUTÁRIA',
        parent_id: '1',
        staff_department: 'N',
        manager_id: 'B01',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [
          {
            id: '71',
            name: 'CGEST',
            description: 'CONSELHO CONSULTIVO DE GESTÃO TRIBUTÁRIA',
            parent_id: '7',
            staff_department: 'Y',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '72',
            name: 'UCJUL',
            description: 'UNIDADE DE CONSULTAS E JULGAMENTO',
            parent_id: '7',
            staff_department: 'N',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '73',
            name: 'COFIMT',
            description:
              'COORDENADORIA DE FISCALIZAÇÃO DE MERCADORIAS EM TRÂNSITO',
            parent_id: '7',
            staff_department: 'N',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '74',
            name: 'UATL',
            description:
              'UNIDADE DE ASSESSORAMENTO TÉCNICO-LEGISLATIVO',
            parent_id: '7',
            staff_department: 'N',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '75',
            name: 'UNIRE',
            description: 'UNIDADE DE REGIMES ESPECIAIS',
            parent_id: '7',
            staff_department: 'N',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '76',
            name: 'UATEC',
            description: 'UNIDADE DE ASSISTÊNCIA TÉCNICA',
            parent_id: '7',
            staff_department: 'Y',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '77',
            name: 'UACON',
            description: 'UNIDADE DE APOIO E ACOMPANHAMENTO',
            parent_id: '7',
            staff_department: 'Y',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '78',
            name: 'CGEST',
            description: 'CONSELHO CONSULTIVO DE GESTÃO TRIBUTÁRIA',
            parent_id: '7',
            staff_department: 'Y',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '79',
            name: 'UPREC',
            description: 'UNIDADE DE PREVISÃO DE RECEITAS',
            parent_id: '7',
            staff_department: 'Y',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '791',
            name: 'ULEG',
            description: 'UNIDADE DE LEGISLAÇÃO TRIBUTÁRIA',
            parent_id: '7',
            staff_department: 'Y',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '792',
            name: 'UATEC',
            description: 'UNIDADE DE ASSESSORAMENTO TÉCNICO',
            parent_id: '7',
            staff_department: 'Y',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '793',
            name: 'UREF',
            description: 'UNIDADE DE REPRESENTAÇÃO FISCAL',
            parent_id: '7',
            staff_department: 'Y',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '794',
            name: 'CPLANF',
            description:
              'COORDENADORIA ESPECIAL DE PLANEJAMENTO E MONITORAMENTO FISCAL',
            parent_id: '7',
            staff_department: 'N',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '795',
            name: 'COTIN',
            description:
              'COORDENADORIA ESPECIAL DE TECNOLOGIA DA INFORMAÇÃO',
            parent_id: '1',
            staff_department: 'N',
            manager_id: 'B03',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [
              {
                id: '7951',
                name: 'UNAD',
                description: 'UNIDADE DE APOIO ADMINISTRATIVO',
                parent_id: '795',
                staff_department: 'Y',
                manager_id: 'B01',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [],
                showChildren: false
              },
              {
                id: '7952',
                name: 'UGDAT',
                description:
                  'UNIDADE DE GESTÃO DE DADOS ANALÍTICOS TRIBUTÁRIOS',
                parent_id: '795',
                staff_department: 'Y',
                manager_id: 'B02',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [

                  {
                    id: '79521',
                    name: 'BIGDATA',
                    description:
                      'UNIDADE BIGDATA',
                    parent_id: '7952',
                    staff_department: 'Y',
                    manager_id: 'B02',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                  {
                    id: '79522',
                    name: 'BI',
                    description:
                      'UNIDADE BUSINESS INTELLIGENCE',
                    parent_id: '7952',
                    staff_department: 'Y',
                    manager_id: 'B06',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                  {
                    id: '79523',
                    name: 'CD/IA',
                    description:
                      'UNIDADE CIÊNCIA DE DADOS E INTELIGENCE ARTIFICIAL',
                    parent_id: '7952',
                    staff_department: 'Y',
                    manager_id: 'B07',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                  {
                    id: '79524',
                    name: 'ETL',
                    description:
                      'UNIDADE ELT (EXTRAIR, TRANSFORMAR E CARREGAR)',
                    parent_id: '7952',
                    staff_department: 'Y',
                    manager_id: 'B02',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },

                ],
                showChildren: false
              },

              {
                id: '7953',
                name: 'UGDFE',
                description:
                  'UNIDADE DE GESTÃO DE DOCUMENTOS FISCAIS E ELETRÔNICOS',
                parent_id: '795',
                staff_department: 'Y',
                manager_id: 'B01',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [],
                showChildren: false
              },
              {
                id: '7955',
                name: 'UGIN',
                description: 'UNIDADE DE GESTÃO DE INFRAESTRUTURA',
                parent_id: '795',
                staff_department: 'Y',
                manager_id: 'B01',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [],
                showChildren: false
              },
              {
                id: '79561',
                name: 'UGSIS-AGRO',
                description:
                  'UNIDADE DE GESTÃO DE SISTEMAS AGROPECUÁRIOS',
                parent_id: '795',
                staff_department: 'Y',
                manager_id: 'B01',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [

                  {
                    id: '795661',
                    name: 'G-19',
                    description:
                      'UNIDADE G-19',
                    parent_id: '79561',
                    staff_department: 'Y',
                    manager_id: 'B09',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                ],
                showChildren: false
              },
              {
                id: '79562',
                name: 'UGSIS-SAT',
                description:
                  'UNIDADE DE GESTÃO DE SISTEMAS DE APOIO À ADMINISTRAÇÃO TRIBUTÁRIA',
                parent_id: '795',
                staff_department: 'N',
                manager_id: 'B01',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [
                  {
                    id: '795621',
                    name: 'G-01',
                    description:
                      'UNIDADE G-01',
                    parent_id: '79562',
                    staff_department: 'Y',
                    manager_id: 'B10',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                ],
                showChildren: false
              },
              {
                id: '79563',
                name: 'UGSIS-OBRIG',
                description:
                  'UNIDADE DE GESTÃO DE SISTEMAS DE OBRIGAÇÕES ACESSÓRIAS',
                parent_id: '795',
                staff_department: 'N',
                manager_id: 'B01',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [
                  {
                    id: '795631',
                    name: 'G-06',
                    description:
                      'UNIDADE G-06',
                    parent_id: '79563',
                    staff_department: 'Y',
                    manager_id: 'B14',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                  {
                    id: '795632',
                    name: 'G-20',
                    description:
                      'UNIDADE G-20',
                    parent_id: '79563',
                    staff_department: 'Y',
                    manager_id: 'B18',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                ],
                showChildren: false
              },
              {
                id: '79564',
                name: 'UGSIS-FISC',
                description:
                  'UNIDADE DE GESTÃO DE SISTEMAS DE FISCALIZAÇÃO E CONTENCIOSO',
                parent_id: '795',
                staff_department: 'N',
                manager_id: 'B01',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [
                  {
                    id: '795641',
                    name: 'G-02',
                    description:
                      'UNIDADE G-02',
                    parent_id: '79561',
                    staff_department: 'Y',
                    manager_id: 'B11',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                  {
                    id: '795642',
                    name: 'G-12',
                    description:
                      'UNIDADE G-12',
                    parent_id: '79561',
                    staff_department: 'Y',
                    manager_id: 'B16',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                  {
                    id: '795643',
                    name: 'G-03',
                    description:
                      'UNIDADE G-03',
                    parent_id: '79561',
                    staff_department: 'Y',
                    manager_id: 'B12',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                ],
                showChildren: false
              },
              {
                id: '79567',
                name: 'UGSIS-CRED',
                description:
                  'UNIDADE DE GESTÃO DE SISTEMAS DE CRÉDITO TRIBUTÁRIO, ARRECADAÇÃO E OUTROS TRIBUTOS',
                parent_id: '795',
                staff_department: 'N',
                manager_id: 'B01',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [
                  {
                    id: '795671',
                    name: 'G-05',
                    description:
                      'UNIDADE G-05',
                    parent_id: '79561',
                    staff_department: 'Y',
                    manager_id: 'B13',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                  {
                    id: '795672',
                    name: 'G-07',
                    description:
                      'UNIDADE G-07',
                    parent_id: '79561',
                    staff_department: 'Y',
                    manager_id: 'B15',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                  {
                    id: '795673',
                    name: 'G-18',
                    description:
                      'UNIDADE G-18',
                    parent_id: '79561',
                    staff_department: 'Y',
                    manager_id: 'B17',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                ],
                showChildren: false
              },
              {
                id: '79565',
                name: 'UGIS-CONTRI',
                description:
                  'UNIDADE DE GESTÃO DE SISTEMAS DE ATENDIMENTO AO CONTRIBUINTE',
                parent_id: '795',
                staff_department: 'N',
                manager_id: 'B01',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [
                  {
                    id: '795651',
                    name: 'G-04',
                    description:
                      'UNIDADE G-04',
                    parent_id: '79565',
                    staff_department: 'Y',
                    manager_id: 'B08',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                ],
                showChildren: false
              },
              {
                id: '79566',
                name: 'UGARQUI',
                description:
                  'UNIDADE DE GESTÃO DE ARQUITETURA, PADRONIZAÇÃO E CONTROLE DE SISTEMAS TRIBUTÁRIOS',
                parent_id: '795',
                staff_department: 'N',
                manager_id: 'B01',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [],
                showChildren: false
              }
            ],
            showChildren: false
          },
          {
            id: '7956',
            name: 'CEATT',
            description:
              'COORDENADORIA ESPECIAL DE APOIO TÉCNICO-TRIBUTÁRIO',
            parent_id: '1',
            staff_department: 'Y',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '797',
            name: 'CAAT',
            description:
              'COORDENADORIA ESPECIAL DE APOIO À ADMINISTRAÇÃO TRIBUTÁRIA',
            parent_id: '1',
            staff_department: 'N',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '798',
            name: 'CRAT',
            description: 'COORDENADORIA DE RECUPERAÇÃO DE ATIVOS',
            parent_id: '1',
            staff_department: 'N',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '799',
            name: 'COFIT',
            description:
              'COORDENADORIA DE FISCALIZAÇÃO DO IPVA E DO ITCD',
            parent_id: '1',
            staff_department: 'N',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '7900',
            name: 'COFICS',
            description:
              'COORDENADORIA DE FISCALIZAÇÃO DO ICMS INDÚSTRIA, COMÉRCIO E SERVIÇOS',
            parent_id: '1',
            staff_department: 'N',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '7901',
            name: 'COFAPEC',
            description:
              'COORDENADORIA DE FISCALIZAÇÃO DO ICMS AGRICULTURA E PECUÁRIA',
            parent_id: '1',
            staff_department: 'N',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '7902',
            name: 'COFIST',
            description:
              'COORDENADORIA DE FISCALIZAÇÃO DO ICMS SUBSTITUIÇÃO TRIBUTÁRIA',
            parent_id: '1',
            staff_department: 'N',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '7903',
            name: 'COACON',
            description:
              'COORDENADORIA DE ATENDIMENTO E APOIO AO CONTRIBUINTE',
            parent_id: '1',
            staff_department: 'N',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '7904',
            name: 'ASSESSORIA SAT',
            description: 'ASSESSORIA DA SAT',
            parent_id: '1',
            staff_department: 'N',
            manager_id: 'B01',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          }
        ],
        showChildren: false
      }
    ],
    showChildren: true
  },
  people: [
    {
      id: 'B01',
      name: 'SEFAZ MS',
      photo: 'B01',
      functionName: 'Secretario de Estado e Fazenda.',
      fields: {
        Email: 'email@sefaz.ms.gov.br',
        Phone: '67 3318-3204',
        Homepage: 'https://www.sefaz.ms.gov.br/',
        Country: 'Brasil',
        City: 'Campo Grande',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B03',
      name: 'Flávio César Mendes de Oliveira',
      photo: 'B03',
      functionName: 'Gestor Responsável',
      fields: {
        Email: '',
        Phone: '67 3318-3595',
        Homepage: 'https://www.sefaz.ms.gov.br/',
        Country: 'BRASIL',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B02',
      name: 'Gerson Santos',
      photo: 'B03',
      functionName: 'HR',
      fields: {
        Email: 'gsantos@fazenda.ms.gov.br',
        Phone: '',
        Homepage: 'https://www.sefaz.ms.gov.br',
        Country: 'Brasil',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B06',
      name: 'Dalva Afonso Bento Mello',
      photo: 'B03',
      functionName: 'HR',
      fields: {
        Email: 'dmello@fazenda.ms.gov.br',
        Phone: '',
        Homepage: 'https://www.sefaz.ms.gov.br',
        Country: 'Brasil',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B07',
      name: 'Emir Mansur Smaka',
      photo: 'B03',
      functionName: 'HR',
      fields: {
        Email: 'esmaka@fazenda.ms.gov.br',
        Phone: '',
        Homepage: 'https://www.sefaz.ms.gov.br',
        Country: 'Brasil',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B08',
      name: 'Silvaney Da Silva Figueredo',
      photo: 'B03',
      functionName: 'HR',
      fields: {
        Email: 'sfigueredo@fazenda.ms.gov.br',
        Phone: '',
        Homepage: 'https://www.sefaz.ms.gov.br',
        Country: 'Brasil',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B09',
      name: 'Cidinéia Aparecida Rinaldo Mishima',
      photo: 'B03',
      functionName: 'HR',
      fields: {
        Email: 'cmishima@fazenda.ms.gov.br',
        Phone: '',
        Homepage: 'https://www.sefaz.ms.gov.br',
        Country: 'Brasil',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B10',
      name: 'Ana Paula Gasparin',
      photo: 'B03',
      functionName: 'HR',
      fields: {
        Email: 'apnogueira@fazenda.ms.gov.br',
        Phone: '',
        Homepage: 'https://www.sefaz.ms.gov.br',
        Country: 'Brasil',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B11',
      name: 'Carla De Arruda Cândido',
      photo: 'B03',
      functionName: 'HR',
      fields: {
        Email: 'ccandido@fazenda.ms.gov.br',
        Phone: '',
        Homepage: 'https://www.sefaz.ms.gov.br',
        Country: 'Brasil',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B12',
      name: 'Danielli Bastiani Rodrigues',
      photo: 'B03',
      functionName: 'HR',
      fields: {
        Email: 'dbrodrigues@fazenda.ms.gov.br',
        Phone: '',
        Homepage: 'https://www.sefaz.ms.gov.br',
        Country: 'Brasil',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B13',
      name: 'Carla Adriana Busanello',
      photo: 'B03',
      functionName: 'HR',
      fields: {
        Email: 'cbusanello@fazenda.ms.gov.br',
        Phone: '',
        Homepage: 'https://www.sefaz.ms.gov.br',
        Country: 'Brasil',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B14',
      name: 'Vanessa De Oliveira Souza Campanha',
      photo: 'B03',
      functionName: 'HR',
      fields: {
        Email: 'vosouza@fazenda.ms.gov.br',
        Phone: '',
        Homepage: 'https://www.sefaz.ms.gov.br',
        Country: 'Brasil',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B15',
      name: 'Aron Lucas Ferreira Rosa Goulart',
      photo: 'B03',
      functionName: 'HR',
      fields: {
        Email: 'agoulart@fazenda.ms.gov.br',
        Phone: '',
        Homepage: 'https://www.sefaz.ms.gov.br',
        Country: 'Brasil',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B16',
      name: 'Roberta Franco Simioli',
      photo: 'B03',
      functionName: 'HR',
      fields: {
        Email: 'rsimioli@fazenda.ms.gov.br',
        Phone: '',
        Homepage: 'https://www.sefaz.ms.gov.br',
        Country: 'Brasil',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B17',
      name: 'Rogério Da Silva Mariano',
      photo: 'B03',
      functionName: 'HR',
      fields: {
        Email: 'rmariano@fazenda.ms.gov.br',
        Phone: '',
        Homepage: 'https://www.sefaz.ms.gov.br',
        Country: 'Brasil',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'B18',
      name: 'Elben Nabhan Benetti',
      photo: 'B03',
      functionName: 'HR',
      fields: {
        Email: 'ebenetti@fazenda.ms.gov.br',
        Phone: '',
        Homepage: 'https://www.sefaz.ms.gov.br',
        Country: 'Brasil',
        City: 'Campo Grande-MS',
        Street: 'RUA DELEGADO OSMAR DE CAMARGO SN - JARDIM VERANEIO'
      }
    },
    {
      id: 'df',
      name: 'Big Boss1',
      photo: '',
      functionName: '',
      fields: {
        Email: '',
        Phone: '0345-394930206',
        Homepage: 'https://www.linkedin.com/company/philips/',
        Country: 'Netherlands',
        City: 'Amsterdam',
        Street: 'Kerkwerg 15'
      }
    },
    {
      id: 'B05',
      name: 'Mr x',
      photo: 'B05',
      functionName: '',
      fields: {
        Email: 'MRX@somecomplany.mail',
        Phone: '0345-394930207',
        Homepage: 'https://www.linkedin.com/company/philips/',
        Country: 'Netherlands',
        City: 'Utrecht',
        Street: 'Dorpstraat 9'
      }
    },
    {
      id: 'B04',
      name: 'Mr y',
      photo: 'B04',
      functionName: 'CIO',
      fields: {
        Email: '',
        Phone: '0345-394930208',
        Homepage: 'https://www.linkedin.com/company/philips/',
        Country: 'Netherlands',
        City: 'Utrecht',
        Street: 'Stationslaan 88'
      }
    },

    {
      id: '44',
      name: 'michael',
      photo: '',
      functionName: '',
      fields: {
        Email: '',
        Phone: '0345-394930209',
        Homepage: 'https://www.linkedin.com/company/philips/',
        Country: 'Netherlands',
        City: 'Utrecht',
        Street: 'Het verdun 5'
      }
    },
    {
      name: 'asdfasdf',
      id: 'asdfasdf',
      manager: true,
      photo: '',
      functionName: '',
      fields: {
        Email: '',
        Phone: '',
        Homepage: '',
        Country: '',
        City: '',
        Street: ''
      }
    },
    {
      name: 'asdfasdfasd',
      id: 'fasddfasdf',
      manager: true,
      photo: '',
      functionName: '',
      fields: {
        Email: '',
        Phone: '',
        Homepage: '',
        Country: '',
        City: '',
        Street: ''
      }
    },
    {
      name: 'jantje',
      id: 'al;skdj;lasdjf',
      manager: false,
      photo: '',
      functionName: '',
      fields: {
        Email: '',
        Phone: '',
        Homepage: '',
        Country: '',
        City: '',
        Street: ''
      }
    },
    {
      name: 'mrnew',
      id: 'mrnew',
      photo: '',
      functionName: '',
      fields: {
        Email: '',
        Phone: '',
        Homepage: '',
        Country: '',
        City: '',
        Street: ''
      }
    }
  ],
  assignments: [
    {
      department_id: '6_2',
      id: 0,
      person_id: 'B01',
      role: 'Gestor Responsável'
    },
    {
      department_id: '6_2',
      id: 1,
      person_id: 'B03',
      role: 'Gestor Responsável'
    },
    {
      department_id: '6_2',
      id: 4,
      person_id: 'B05',
      role: 'Gestor Responsável'
    },
    {
      department_id: '6_2',
      id: 5,
      person_id: 'B04',
      role: 'Gestor Responsável'
    },
    {
      department_id: '6_2',
      id: 6,
      person_id: '44',
      role: 'Gestor Responsável'
    },
    {
      department_id: '5',
      id: 9,
      person_id: 'al;skdj;lasdjf',
      role: 'Gestor Responsável'
    },
    {
      department_id: '6_2',
      id: 10,
      person_id: 'mrnew',
      role: 'new job'
    }
  ]
}
var UPDATED_ON = '13-09-2020'
