import { DbAddAccount } from "../../data/useCases/account/db-add-user-account"
import { RegisterUserAccountController } from "../../presentation/controllers/user/user-account"

export const makeRegisterUserAccountController = (): RegisterUserAccountController => {
    const dbAddAccount = new DbAddAccount()
    const registerUserAccount = new RegisterUserAccountController(dbAddAccount)
    return registerUserAccount
}