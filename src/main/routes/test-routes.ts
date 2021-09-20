import { Router } from 'express'
import { adapterRouter } from '../adapters/express-protocols'
import { makeRegisterUserAccountController } from '../factories/user-account'

export default (router: Router): void => {
    router.post('/user', adapterRouter(makeRegisterUserAccountController()))

    router.post('/test', (req, res)=> {
        const { name, email } = req.body
        res.status(200).json({
            ok: true,
            msg: 'everthing is ok 2!',
            body: `name: ${name}, email: ${email}`
        })
    })
}