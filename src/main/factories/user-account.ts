import { DbAddAccount } from "../../data/useCases/account/db-add-user-account"
import { UserMongoRepository } from "../../infra/db/mongodb/repository/user-repository"
import { RegisterUserAccountController } from "../../presentation/controllers/user/user-account"
import { BcryptAdapter } from "../../utils-adapters/bcrypt-adapter"
import { EmailValidatorAdapter } from "../../utils-adapters/email-validator-adapter"

export const makeRegisterUserAccountController = (): RegisterUserAccountController => {
    const salt = 10
    const userMongoRepository = new UserMongoRepository()
    const bcryptAdapter = new BcryptAdapter(salt)
    const dbAddAccount = new DbAddAccount(userMongoRepository, bcryptAdapter)
    const emailValidatorAdapter = new EmailValidatorAdapter()
    const registerUserAccount = new RegisterUserAccountController(dbAddAccount, emailValidatorAdapter, userMongoRepository)
    return registerUserAccount
}