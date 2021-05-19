const somar = require('./somar');

test('Deve retornar 2 ao somar 1 + 1', () => {
  expect(somar(1, 1)).toBe(2)
})