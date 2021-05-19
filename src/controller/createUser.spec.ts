import CreateUserController from './createUser';

describe('Testes do CreateUserController', () => {
  test('Deve retornar 400 se nome não for enviado', () => {
    let controller = new CreateUserController()

    let request = {
      body: {
        email: 'andre@gmail.com',
        senha: 'senha',
        confirmacaoSenha: 'senha'
      }
    }

    let resultado = controller.handle(request)

    expect(resultado.status).toBe(400)
    expect(resultado.msg).toBe('O campo nome é obrigatório');
  })

  test('Deve retornar 400 se email não for enviado', () => {
    let controller = new CreateUserController()

    let request = {
      body: {
        nome: 'andre',
        senha: 'senha',
        confirmacaoSenha: 'senha'
      }
    }

    let resultado = controller.handle(request)

    expect(resultado.status).toBe(400);
    expect(resultado.msg).toBe('O campo email é obrigatório');
  })
})