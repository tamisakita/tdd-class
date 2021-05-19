import { isGeneratorFunction } from "util/types";

export default class CreateUserController {
  handle(request: any): any {
    let { nome, email } = request.body;

    if(!nome) {
      return {
        status: 400,
        msg: 'O campo nome é obrigatório'
      }
    }

    if(!email) {
      return {
        status: 400,
        msg: 'O campo email é obrigatório'
      }
    }
  }
}