import { UserAccount } from "../../../domain/entities/user";
import { IAddAccount } from "../../../domain/useCases/account/add-user-account";
import { IUserRepository } from "../../contract-repository/user-repository";

export class DbAddAccount implements IAddAccount{
    constructor (private readonly iUserRepository: IUserRepository) {
        this.iUserRepository = iUserRepository
    }
    async add (account: UserAccount): Promise<UserAccount> {
        const userDb = await this.iUserRepository.add(account)
        return userDb
    }
}