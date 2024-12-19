import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorhandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import { UserRoutes } from './app/modules/user/user.route';
import { BlogRoutes } from './app/modules/blog/blog.route';
import { AuthRoutes } from './app/modules/auth/auth.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/auth', AuthRoutes);
app.use('/api', UserRoutes);
app.use('/api', BlogRoutes);

const test = (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is running 🏃‍♂️',
  });
};

app.get('/', test);

app.use(globalErrorhandler);
app.use(notFound);

export default app;
