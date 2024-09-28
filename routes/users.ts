import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get("/:id", (req: Request, res: Response) => {
  const id: string = req.params['id'];
  res.send(`Esta é a rota do Usuário ${id}`);
});

router.post('/', (req: Request, res: Response) => {
});

export default router;

