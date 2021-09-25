import { Request, Response ,Router } from 'express';

const router = Router();

router.post('/callback',(req: Request, res: Response) => {
    console.log(req);
    res.send('Hello');
})

export default router;