import { HttpRequest, HttpResponse } from './../../interfaces/protocols/http'
import { Controller } from './../../interfaces/protocols/controller'

export class RegisterUserAccount implements Controller{
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        return
    }
}