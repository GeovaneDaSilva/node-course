export class ReadyExist extends Error {
    constructor(param: string) {
        super(`This information already in our database: ${param}`)
        this.name = `This information already in our database: ${param}`
    }
}

export class NoReadyExist extends Error {
    constructor(param: string) {
        super(`This does not exist in our database: ${param}`)
        this.name = `This does not exist in our database: ${param}`
    }
}