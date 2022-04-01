/// <reference types = "cypress"/>

it.only('A external test...', () => {

})

describe.skip('Shold group tests...', () => {
    describe('Should group more specific tests...', () => {
        it.skip('A specific test...', () => {

        })
    })

    describe('Should group more specific tests 2...', () => {
        it('A internal test...', () => {

        })
    })
})