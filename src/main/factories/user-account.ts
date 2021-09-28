import { DbAddAccount } from "../../data/useCases/account/db-add-user-account"
import { UserMongoRepository } from "../../infra/db/mongodb/repository/user-repository"
import { RegisterUserAccountController } from "../../presentation/controllers/user/user-account"
import { EmailValidatorAdapter } from "../../utils-adapters/email-validator-adapter"

export const makeRegisterUserAccountController = (): RegisterUserAccountController => {
    const userMongoRepository = new UserMongoRepository()
    const dbAddAccount = new DbAddAccount(userMongoRepository)
    const emailValidatorAdapter = new EmailValidatorAdapter()
    const registerUserAccount = new RegisterUserAccountController(dbAddAccount, emailValidatorAdapter, userMongoRepository)
    return registerUserAccount
}