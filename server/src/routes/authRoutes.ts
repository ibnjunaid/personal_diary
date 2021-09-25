import { Request, Response ,Router } from 'express';

const router = Router();

router.post('/callback',(req: Request, res: Response) => {
    console.log(req.body);
    res.json({
        status: true,
        message: 'Login Success'
    });
})

export default router;