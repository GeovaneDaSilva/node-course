export interface Encrypt {
    hash: (value: string)  => Promise<string>
    compary?: (value: string, compary: string)  => Promise<Boolean>
}