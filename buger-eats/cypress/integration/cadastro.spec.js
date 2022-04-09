import SignupPage from "../pages/SignupPage";

describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador', () => {


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

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
        signup.modalContentShouldBe(expectedMessage)
    })

    it('CPF incorreto', () => {

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

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })
})