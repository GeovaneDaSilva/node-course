export class ServerError extends Error {
    constructor(stack: string) {
        super('Error internal the Server')
        this.name = 'Error internal the Server'
        this.stack = stack
    }
}