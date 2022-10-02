let etapas = [
    { //etapa de vereador com lista de candidatos
        titulo: 'DEPUTADO',
        digitos: 5,
        candidatos: [
            {
                numeros: '38111',
                nome: 'fulano de tal',
                partido: 'ABC',
                fotos: [
                    { url: '38111.jpg', legenda: 'Vereador' }
                ]
            },
            {
                numeros: '77222',
                nome: 'Beltrano da silva',
                partido: 'DEFG',
                fotos: [
                    { url: '77222.jpg', legenda: 'Vereador' }
                ]
            }
        ]
    },

    { //etapa de prefeito com lista de candidatos
        titulo: 'PRESIDENTE',
        digitos: 2,
        candidatos: [
            {
                numeros: '12',
                nome: 'Ciro Gomes',
                partido: 'PDT',
                vice: 'Cic',
                fotos: [
                    { url: '99.jpg', legenda: 'Prefeito' },
                    { url: '99_2.jpg', legenda: 'Vice-Prefeito', small: true }
                ]
            },
            {
                numeros: '22',
                nome: 'Bolsonaro',
                partido: 'PL',
                vice: 'Zul',
                fotos: [
                    { url: '84.jpg', legenda: 'Prefeito' },
                    { url: '84_2.jpg', legenda: 'Vice-Prefeito', small: true }
                ]
            }
        ]
    }
]