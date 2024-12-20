import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorhandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import { BlogRoutes } from './app/modules/blog/blog.route';
import { AuthRoutes } from './app/modules/auth/auth.route';
import { AdminRoutes } from './app/modules/Admin/admin.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/auth', AuthRoutes);
app.use('/api/admin', AdminRoutes);
app.use('/api/blogs', BlogRoutes);

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
