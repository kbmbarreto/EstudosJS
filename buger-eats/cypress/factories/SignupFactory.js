var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: "11999999999",
            address: {
                postalcode: "05564-200",
                street: "Avenida Engenheiro Heitor Antônio Eiras Garcia",
                number: "627",
                details: "Apto 21",
                district: "Jardim Esmeralda",
                city_state: "São Paulo/SP"
            },
            delivery_method: "Moto",
            cnh: "images/cnh-digital.jpg"
        }

        return data
    }
}