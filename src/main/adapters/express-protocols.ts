import { HttpRequest } from '../../presentation/interfaces/protocols/http'
import { Controller } from './../../presentation/interfaces/protocols/controller'
import { Request, Response } from 'express'

export const adapterRouter = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            body: req.body,
            params: req.params
        }

        const httpResponse = await controller.handle(httpRequest)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}