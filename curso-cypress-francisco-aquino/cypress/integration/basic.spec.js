/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //cont title = cy.title()
        //console.log(title)  -> Desta maneira não foi possivel imprimir, por conta da assincronissidade, ver isso em promisses

        //cy.pause(); -> Pausa a execução, sendo necessário dar um resume para continuar com os testes

        cy.title().debug().should('be.equal', 'Campo de Treinamento') //procura o 'Campo de Treinamento no title da pagina, debugando o title'
        cy.title().should('contain', 'Campo')

        // ou pode ser feito assim
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

            let syncTitle
        //cy.title().debug()    -> este comando para a execução do teste e coloca em modo debug, agindo como um breakpoint
        cy.title().then(title => {
            console.log(title)

            cy.get('#formNome').type(title)

            syncTitle = title
        })

        cy.get('[data-cy=dataSobrenome]').then( $el => {
            $el.val(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($el => {
            cy.wrap($el).type(syncTitle)
        })
    })

    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple').click()
        cy.get('#buttonSimple').should('have.value', 'Obrigado!') //verifica se possui um valor chamado Obrigado neste elemento

        //ou pode ser feito assim

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!') //verifica se possui um valor chamado Obrigado neste elemento
    })
})