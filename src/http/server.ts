import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';

const app: express.Application = express();

app.use('/users', usuarioRoutes);

app.use((req: Request, res: Response, next: NextFunction): void => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

app.use(errorHandler);

const port: string | undefined = process.env.PORT;

app.listen(port, (): void => {
    console.log(`Server está rodando na porta ${port}`);
});