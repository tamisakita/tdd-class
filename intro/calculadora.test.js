const { somar } = require('./calculadora');

test('1 + 1 = 2', () => {
  let resultado = somar(1, 1);
  expect(resultado).toBe(2);
})

test('1 + 3 = 4', () => {
  let resultado = somar(1, 3);
  expect(resultado).not.toBe(2);
})