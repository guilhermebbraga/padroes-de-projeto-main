// Design Pattern Decorator: padrão que permite adicionar novas funcionalidades a um objeto de forma dinâmica. Ao invés de modificar este objeto diretamente, podendo ocasionar em erros e, ferir o principío Open/Closed do SOLID, adicionamos uma "CAPA" ao seu redor.

// Tipo aquelas bonecas russas, onde uma se encaixa na outra, sem modificar sua aparência original.

import { Controller } from "../interfaces/controller";
import { HttpRequest, HttpResponse } from "../interfaces/http";

export class LogErroControllerDecorator implements Controller {
  constructor(private readonly controller: Controller) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest);

    if (httpResponse.statusCode === 500) {
      console.log("Log do erro");
    }

    return httpResponse;
  }
}
