import { HttpRequest, HttpResponse } from './../../interfaces/protocols/http'
import { Controller } from './../../interfaces/protocols/controller'
import { IAddAccount } from '../../../domain/useCases/account/add-user-account'
import { badRequest, serverError, success, unauthorized } from '../../interfaces/protocols/http-response'
import { MissingParamError } from '../../errors/missing-param-error'
import { IEmailValidator } from '../../../services/email-validator-adapter'
import { InvalidParamError } from '../../errors/invalid-param-error'
import { IUserRepository } from '../../../data/contract-repository/user-repository'
import { ReadyExist } from '../../errors/not-found'

export class RegisterUserAccountController implements Controller {
    constructor(private readonly iAddAccount: IAddAccount, 
        private readonly iEmailValidator: IEmailValidator,
        private readonly iUserRepository: IUserRepository) {
        this.iAddAccount = iAddAccount
        this.iEmailValidator = iEmailValidator
        this.iUserRepository = iUserRepository
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
            
            const existUserAccount = await this.iUserRepository.getOne(email)

            return console.log(existUserAccount)
            
            if(existUserAccount) {
                return unauthorized(new ReadyExist(email))
            }

            const bodyRequest = await this.iAddAccount.add({
                name, email, password, created_at: new Date(), activated_at: false, role
            })

            return success(bodyRequest)

        } catch (error) {
            return serverError(error)
        }
    }
}