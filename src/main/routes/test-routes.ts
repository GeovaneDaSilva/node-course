import { Router } from 'express'

export default (router: Router): void => {
    router.get('/test', (req, res)=> {
        res.status(200).json({
            ok: true,
            msg: 'everthing is ok 2!'
        })
    })

    router.post('/test', (req, res)=> {
        const { name, email } = req.body
        res.status(200).json({
            ok: true,
            msg: 'everthing is ok 2!',
            body: `name: ${name}, email: ${email}`
        })
    })
}