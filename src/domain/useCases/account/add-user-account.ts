import { UserAccount } from "../../entities/user";

export interface IAddAccount {
    add: (account: UserAccount) => Promise<UserAccount>
}