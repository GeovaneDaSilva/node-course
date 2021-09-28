import { UserAccount } from "../../domain/entities/user";

export interface IUserRepository {
    add: (account: UserAccount) => Promise<UserAccount>
}