import { IUserRepository } from "../../../../data/contract-repository/user-repository";
import { UserAccount } from "../../../../domain/entities/user";
import User from "../schemas/user";

export class UserMongoRepository implements IUserRepository{
    async add (account: UserAccount): Promise<UserAccount> {
        const collection: UserAccount | any = await User.create(account)
        const { _id, email, role } = collection
        const collectionMap: UserAccount | any = { id: _id, email, role}
        return collectionMap
    }

    async getOne ( email_key: string): Promise<UserAccount> {
        const collection: UserAccount | any = await User.findOne( { email: email_key })
        const { _id, email, role } = collection
        const collectionMap: UserAccount | any = { id: _id, email, role}
        return collectionMap
    }
}