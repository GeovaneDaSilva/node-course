import { UserAccount } from "../../../domain/entities/user";
import { IAddAccount } from "../../../domain/useCases/account/add-user-account";
import { Encrypt } from "../../../infra/cryptography/encrypter";
import { IUserRepository } from "../../contract-repository/user-repository";

export class DbAddAccount implements IAddAccount{
    constructor (private readonly iUserRepository: IUserRepository,
        private readonly IEncrypt: Encrypt) {
        this.iUserRepository = iUserRepository
        this.IEncrypt = IEncrypt
    }
    async add (account: UserAccount): Promise<UserAccount> {
        account.password = await this.IEncrypt.hash(account.password)
        const userDb = await this.iUserRepository.add(account)
        return userDb
    }
}