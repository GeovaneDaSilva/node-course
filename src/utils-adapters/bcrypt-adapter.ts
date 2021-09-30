import bcrypt from 'bcrypt'
import { Encrypt } from '../infra/cryptography/encrypter';

export class BcryptAdapter implements Encrypt {
    constructor (private readonly salt: number) {
        this.salt = salt
    }
    async hash (value: string): Promise<string> {
        const hash = await bcrypt.hashSync(value, this.salt)
        return hash
    }

    async compary (value: string, compary: string): Promise<Boolean> {
        const comparyHash = await bcrypt.compareSync(value, compary)
        return comparyHash
    }
}