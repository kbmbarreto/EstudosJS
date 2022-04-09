

describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador', () => {
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        //Massa de teste
        var deliver = {
            name: 'Kleber Barreto de Macedo',
            cpf: '52959371003',
            email: 'tikarakatika@zip.net',
            whatsapp: '11999999999',
            address: {
                postalcode: '05564-200',
                street: 'Avenida Engenheiro Heitor Antônio Eiras Garcia',
                number: '627',
                details: 'Apto 21',
                district: 'Jardim Esmeralda',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'images/cnh-digital.jpg'
        }

        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()
        /*
        Anotações:

        input[accept^="image"] = ^ começa com image
        input[accept*="image"] = * contain image
        input[accept$="image"] = $ termina com image
         */
        cy.get('input[accept^="image"]').attachFile(deliver.cnh)
        cy.get('form button[type="submit"]').click()

        const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    })

    it('CPF incorreto', () => {
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        //Massa de teste
        var deliver = {
            name: 'Kleber Barreto de Macedo',
            cpf: '0000000000',
            email: 'tikarakatika@zip.net',
            whatsapp: '11999999999',
            address: {
                postalcode: '05564-200',
                street: 'Avenida Engenheiro Heitor Antônio Eiras Garcia',
                number: '627',
                details: 'Apto 21',
                district: 'Jardim Esmeralda',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'images/cnh-digital.jpg'
        }

        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()
        /*
        Anotações:

        input[accept^="image"] = ^ começa com image
        input[accept*="image"] = * contain image
        input[accept$="image"] = $ termina com image
         */
        cy.get('input[accept^="image"]').attachFile(deliver.cnh)
        cy.get('form button[type="submit"]').click()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
    })
})