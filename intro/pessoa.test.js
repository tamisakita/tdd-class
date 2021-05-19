const Pessoa = require('./pessoa');

test('toEqual', () => {
  let andre = new Pessoa('André', 30);

  let pessoaFake = {
    nome: 'André',
    idade: 30
  }

  expect(pessoaFake).toEqual(andre)
});

test('toString', () => {
  let andre = new Pessoa('André', 30);

  expect(andre.toString()).toBe('André, 30');
});

test('', () => {
  let pessoa;

  expect(pessoa).toBeUndefined();

  pessoa = null;

  expect(pessoa).toBeNull();
});

test('', () => {
  let andre = new Pessoa('Andre', 30, ['Ferrari', 'Uno']);

  expect(andre.idade).toBeLessThan(35);
});

test('', () => {
  let andre = new Pessoa('Andre', 30, ['Ferrari', 'Uno']);

  expect(andre.nome).toMatch(/And/)
});

test('', () => {
  let andre = new Pessoa('Andre', 30, ['Ferrari', 'Uno']);

  expect(andre.carros).toContain('Uno')
});

test('', () => {
  let andre = new Pessoa('Andre', 30, ['Ferrari', 'Uno']);

  expect(() => andre.comprarCarro()).toThrow(new Error('Programador não'))
});




