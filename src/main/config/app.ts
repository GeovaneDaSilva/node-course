import express from 'express'
import { config as dotenv } from 'dotenv'
import routes from './routes'

const app = express()

dotenv()
routes(app)
export default app