import { Router } from 'express'

export default (router: Router): void => {
    router.get('/test', (req, res)=> {
        res.status(200).json({
            ok: true,
            msg: 'everthing is ok 2!'
        })
    })
}