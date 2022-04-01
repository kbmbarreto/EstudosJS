/// <reference types = "cypress"/>

it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).equal(1);
    expect(a).to.be.equal('b');
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(c).undefined;
})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({ a: 1, b: 2 })
    expect(obj).eql({ a: 1, b: 2 })
    expect(obj).include({ a: 1 })
    expect(obj).to.have.property('b', 2)
    expect(obj).to.not.be.empty
    expect({}).to.be.empty
})

it('Arrays', () => {
    const arr = [1, 2, 3]

    expect(arr).to.have.members([1, 2, 3])
    expect(arr).to.include.members([1, 3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
    expect([]).to.not.be.empty
})

it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object') //verifica se o objeto {} é um objeto.
    expect([]).to.be.an('array') //verifica se o array [] é de fato um array
})

it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste') //verifica se o conteudo da variavel é ('String de teste')
    expect(str).to.have.length(15) //verifica se o tamanho da string é de 15 caracteres
    expect(str).to.contains('de') //verifica se este trecho da string está na variavel
    expect(str).to.match(/de/) //verifica se existe um 'de' dentro da variavel
    expect(str).to.match(/^String/) //verifica se a variável inicia com o nome String (^ = inicia com ^String)
    expect(str).to.match(/teste$/) //verifica se a variável possui o nome teste no final ($ = finaliza com teste$)
    expect(str).to.match(/.{15}/) //verifica o tamanho esperado com o ponto, que aceita qualquer caractere
    expect(str).to.match(/\w+/) //verifica se existem apenas letras
    expect(str).to.match(/\D+/) //verifica que não contém numeros
})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4) //verifica se é igual a 4
    expect(number).to.be.above(3) //verifica se é acima de 3
    expect(number).to.be.below(7) //verifica se está abaixo de 7
    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1) //verificar se é próximo de 5.2 com precisão de 0.1
    expect(floatNumber).to.be.above(5) //verifica que é acima de 5
})