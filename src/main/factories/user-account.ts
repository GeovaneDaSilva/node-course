import { DbAddAccount } from "../../data/useCases/account/db-add-user-account"
import { RegisterUserAccountController } from "../../presentation/controllers/user/user-account"
import { EmailValidatorAdapter } from "../../utils-adapters/email-validator-adapter"

export const makeRegisterUserAccountController = (): RegisterUserAccountController => {
    const dbAddAccount = new DbAddAccount()
    const emailValidatorAdapter = new EmailValidatorAdapter()
    const registerUserAccount = new RegisterUserAccountController(dbAddAccount, emailValidatorAdapter)
    return registerUserAccount
}