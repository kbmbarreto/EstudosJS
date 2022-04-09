

describe('Cadastro', () => {
    it('Usuário deve se tornar um entregadr', () => {
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        //Massa de teste
        var entregador = {
            nome: 'Kleber Barreto de Macedo',
            cpf: '00000000000',
            email: 'tikarakatika@zip.net',
            whatsapp: '11999999999',
            endereco: {
                cep: '05564-200',
                rua: 'Avenida Engenheiro Heitor Antônio Eiras Garcia',
                numero: '627',
                complemento: 'Apto 21',
                bairro: 'Jardim Esmeralda',
                cidade_uf: 'São Paulo/SP'
            }
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
    })
})