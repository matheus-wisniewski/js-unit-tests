const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se `productDetails` retorna os valores esperados', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
    expect(productDetails('alcool gel', 'máscara')).toHaveLength(2);
    expect(typeof productDetails('alcool gel', 'máscara')[0] && typeof productDetails('alcool gel', 'máscara')[1]).toBe('object');
    expect(productDetails('alcool gel', 'máscara')[0].details).toHaveProperty('productId', 'alcool gel123')
    expect(productDetails('alcool gel', 'máscara')[1].details).toHaveProperty('productId', 'máscara123');
  });
});
