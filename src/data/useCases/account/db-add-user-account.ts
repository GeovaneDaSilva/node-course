import { UserAccount } from "../../../domain/entities/user";
import { IAddAccount } from "../../../domain/useCases/account/add-user-account";

export class DbAddAccount implements IAddAccount{
    async add (account: UserAccount): Promise<UserAccount> {

        console.log(account);
        
        return account
    }
}