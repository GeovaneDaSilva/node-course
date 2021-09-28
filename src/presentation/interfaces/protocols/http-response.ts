import { ServerError } from '../../errors/server-error';
import { HttpResponse } from './http';


export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: error
})

export const success = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data
})

export const notFound = (data: any): HttpResponse => ({
    statusCode: 404,
    body: data
})
export const unauthorized = (error: Error): HttpResponse => ({
    statusCode: 401,
    body: { error: error.message }
})

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    body: new ServerError(error.stack)
})