let restoDivisao = require('./exercicio4')

describe('teste da função restoDaDivisaoCalcular do exercicio 4', () => {
    it('retorno da função restoDaDivisaoCalcular', () => {
        const resultado = restoDivisao(5,2)

        expect(resultado).toBe(1)
    })
})