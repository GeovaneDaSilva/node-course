import { HttpRequest, HttpResponse } from './../../interfaces/protocols/http'
import { Controller } from './../../interfaces/protocols/controller'
import { IAddAccount } from '../../../domain/useCases/account/add-user-account'
import { badRequest, serverError, success } from '../../interfaces/protocols/http-response'
import { MissingParamError } from '../../errors/missing-param-error'
import { IEmailValidator } from '../../../services/email-validator-adapter'
import { InvalidParamError } from '../../errors/invalid-param-error'

export class RegisterUserAccountController implements Controller {
    constructor(private readonly iAddAccount: IAddAccount, private readonly iEmailValidator: IEmailValidator) {
        this.iAddAccount = iAddAccount
        this.iEmailValidator = iEmailValidator
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
            
            const isValid = this.iEmailValidator.isValid(email)
            
            if (!isValid) {
                return badRequest( new InvalidParamError(email))
            }

            if (password !== passwordConfirmation) {
                return badRequest(new InvalidParamError('passwordConfirmation'))
            }

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