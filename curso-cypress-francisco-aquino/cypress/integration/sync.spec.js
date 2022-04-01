/// <reference types="cypress"/>

describe('Esperas...', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar o elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')
    })

    it('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
            //cy.get('#lista li')           -- como a página em questão tem um delay para carregar o item 2, ele acaba ficando preso
            //  .find('span')               -- ao item 1. Por isso, precisamos mudar este trecho e fazer o código abaixo:
            //.should('contain', 'Item 2')
        cy.get('#lista li span') //  -- aqui, após achar o item 1, ele faz uma nova busca pelos span, onde contem o item 2
            .should('contain', 'Item 2') // -- após isso, é só encontrar o item 2, que ja terá carregado.
    })

    it('Uso do timeout', () => {
        cy.get('#buttonDelay').click()
            //cy.get('#novoCampo', { timeout: 5000 }).should('exist') -> aqui estou indicando que para esta ação o timeout será de 5 seg.
        cy.get('#novoCampo').should('exist')
            // cy.wait(5000) -> este comando para a aplicação por 5 segundos
    })

    it('Uso do timeout (2)', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', { timeout: 30000 })
            .should('have.length', 1) // aqui estou esperando que tenha 1 item na lista
    })

    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })

    it('Should vs Then', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el => { // o then aguarda que seja finalizado para ser executado, o should fica executando até 
                expect($el).to.have.length(1) // satisfazer a requisição. Outra diferença é que o should não recebe o que está em return.
            }) // apenas o then considera o return
    })

    // caso precise fazer novas buscas, precisa deixar dentro de um bloco then, pois o should fica retentando e pode entrar em loop.
})

/*
{
    "defaultCommandTimeout": 1000
} 
    No comando acima, quando inserido dentro do arquivo cypress.json, indica que a aplicação toda deverá 
    rodar os testes com timeout de 1 minuto apenas. Não é recomendável utilizar o timeout assim, sendo 
    melhor mjudar o timeout apenas no caso de teste específico.
*/