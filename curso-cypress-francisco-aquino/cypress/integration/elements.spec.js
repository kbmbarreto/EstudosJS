/// <reference types="cypress"/>

describe('Work with basic elements', () => {

    before(() => { //isso é um Hook, estou mandando todos os testes herdarem esse comando
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { //Diferente do before, ele vai eecutar isso em cada teste
        cy.reload()
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado') //jquery selector -> aqui ele procura dentro 
            //do body da página, verifica se contem aquele trecho de texto
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') //have.text precisa que toda a frase
            //seja especificada, caso contrário o teste falhará.
    })

    it('Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload() //recarrega o link
        cy.get('#resultado').should('have.not.text', 'Voltou!') //verifica se não existe o texto Voltou!
        cy.contains('Voltar').click() //o contains busca pelo texto, diferente do get
        cy.get('#resultado').should('have.text', 'Voltou!') //o get é mais indicado, pois caso o texto mude com o 
            //idioma não ocorrerá problemas
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')
            .should('have.value', '???')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', { delay: 100 })
            .should('have.value', 'acerto')
    })

    it('Radio Button', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc')
            .should('not.be.checked')

        cy.get("[name='formSexo']")
            .should('have.length', 2) //verifica se possuem 2 elementos com o name formSexo
    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[id=formComidaFavorita]').click({ multiple: true }) // -> deveria funcionar para clicar em todos
        cy.get('#formComidaPizza').should('not.be.checked')

        cy.get('#formComidaVegetariana').click()
        cy.get('#formComidaVegetariana').should('be.checked')
    })

    it('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('Superior')
            .should('have.value', 'superior')
    })

    it('Combo múltiplo', () => {
        cy.get('[data-testid=dataEsportes]') //aqui escolhemos o elemento todo que contém os valores que serão selecionados
            .select(['futebol', 'Corrida']) //aqui selecionamos os valores em uma array
    })

    //VALIDAR OPÇÕES DO COMBO (SABER QUE EXISTEM DETERMINADOS ITENS COMO OPÇÃO)

    it('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('Superior')
            .should('have.value', 'superior')

        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomp')

        cy.get('[data-test=dataEscolaridade] option').should('have.length', 8) //Aqui estou pegando o combo e 
        //verificando o tamanho da lista, dizendo que precisa ter 8 itens (conforme vi no Cypress que eram 8
        //elementos com a propriedade 'option', após inspecionar o combo)
        cy.get('[data-test=dataEscolaridade] option').then($arr => {
            const values = [] //Agora, fazemos praticamente a mesma coisa que la em cima, mas vou criar um 
            //array
            $arr.each(function(){ //Aqui coloco function, porque preciso usar um this
                values.push(this.innerHTML) //Aqui povoamos o array com o conteudo do combo
            })
            expect(values).to.include.members(["Superior", "Mestrado"]) //aqui verifico se no array existem essas opções
        })
    })

    //VALIDAR AS OPÇÕES QUE FORAM APLICADAS NO COMBO

    it.only('Combo múltiplo', () => {
        cy.get('[data-testid=dataEsportes]') //aqui escolhemos o elemento todo que contém os valores que serão selecionados
            .select(['natacao', 'Corrida', 'nada']) //aqui selecionamos os valores em uma array
        
        // Assim não funciona,
        // é preciso de uma promise para termos um controle maior sobre nossa 
        //assertiva -> cy.get('[data-test=dataEsportes]').should('have.value', ['futebol', 'Corrida'])

        cy.get('[data-testid=dataEsportes]').then($el => {
            expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada']) //Aqui estou esperando que tenham esses valores no elemento
            expect($el.val()).to.have.length(3) //Aqui estou esperando receber 3 resultados com base nos valores que passei na lista acima
        
        cy.get('[data-testid=dataEsportes]').invoke('val').should('eql', ['natacao', 'Corrida', 'nada'])
        //Aqui acima fiz a mesma coisa que nas anteriores, mas utilizando o invoke. O array que voltar
        //a partir do 'val' precisa ter as informações contidas no array dentro do should.
        })
    })
})