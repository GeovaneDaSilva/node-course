import { IUserRepository } from "../../../../data/contract-repository/user-repository";
import { UserAccount } from "../../../../domain/entities/user";
import User from "../schemas/user";

export class UserMongoRepository implements IUserRepository{
    async add (account: UserAccount): Promise<UserAccount> {
        const collection: UserAccount | any = await User.create(account)
        return collection
    }
}