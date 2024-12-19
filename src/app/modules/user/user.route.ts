import express from 'express';
import { UserControllers } from './user.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';

const userRouter = express.Router();

// Register user
userRouter.get('/users', auth(USER_ROLE.admin), UserControllers.getAllUsers);

export const UserRoutes = userRouter;
