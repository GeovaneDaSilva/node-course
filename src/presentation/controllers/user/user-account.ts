import { HttpRequest, HttpResponse } from './../../interfaces/protocols/http'
import { Controller } from './../../interfaces/protocols/controller'
import { IAddAccount } from '../../../domain/useCases/account/add-user-account'
import { badRequest, serverError, success } from '../../interfaces/protocols/http-response'
import { MissingParamError } from '../../errors/missing-param-error'

export class RegisterUserAccountController implements Controller {
    constructor(private readonly iAddAccount: IAddAccount) {
        this.iAddAccount = iAddAccount
    }
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {            
            const { name, email, password, passwordConfirmation, created_at, activated_at, role } = httpRequest.body
            const requiredField = ['name', 'email', 'password', 'passwordConfirmation']
            for (const field of requiredField) {
                if (!httpRequest.body[field]) {
                    return badRequest( new MissingParamError(field))
                }
            }
            

            // Verify password confirmation 

            // Verify if exist account  = implemente repository

    
            
            const bodyRequest = await this.iAddAccount.add({
                name, email, password, created_at: new Date(), activated_at: false, role
            })

            return success(bodyRequest)

        } catch (error) {
            return serverError(error)
        }
    }
}