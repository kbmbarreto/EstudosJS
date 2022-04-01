/// <reference types="cypress" />

describe('Helpers...', () => {
    it('Wrap', () => {
        const obj = { nome: 'User', idade: 20 } //objeto comum em Js
        expect(obj).to.have.property('nome') //assertiva sem ser encapsulada
        cy.wrap(obj).should('have.property', 'nome') //assertiva encapsulada

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').type('funciona?')

        //agora a mesma coisa das duas linhas de cima, mas em promise
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').then($el => {
            cy.wrap($el).type('funciona via cypress').should('have.value', 'funciona via cypress')
        })

        //agora com uma promise não relacionada com o cypress
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botao'))
            //promise.then(num => console.log(num)) -> não gerenciado pelo cypress (não encapsulado, ele executa primeiro, 
            //sem sincronismo)
        cy.wrap(promise).then(ret => console.log(ret)) //gerenciado pelo cypress
        cy.get('#buttonList').then(() => console.log('Encontrei o segundo botao'))

        cy.wrap(1).then(num => {
                return 2
            }).should('be.equal', 2) //aqui consegui comparar com 2 por conta do return, mas se fosse um should eu não conseguiria, 
            // porque o should ignora o retorno.
    })

    it('Its...', () => { // o método its tabalha com as propriedades, enquanto o invoke trabalha com as funções
        const obj = { nome: 'User', idade: 20 }
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User')

        const obj2 = { nome: 'User', idade: 20, endereco: { rua: 'dos bobos' } }
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bobos')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal', 20)
    })

    it('Invoke 1', () => {
        const getValue = () => 1; //aqui eu tenho uma função simples em Js

        cy.wrap({ fn: getValue }).invoke('fn').should('be.equal', 1) //trouxe essa função para o Cypress, passando o getValue para fn
    })

    it('Invoke 2', () => {
        const soma = (a, b) => a + b;

        cy.wrap({ fn: soma }).invoke('fn', 2, 5).should('be.equal', 7)
    })
})