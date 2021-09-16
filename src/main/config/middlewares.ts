import { Express } from 'express'
import { bodyParser, cors } from '../middlewares/index'

export default (app: Express): void => {
    app.use(bodyParser)
    app.use(cors)
}