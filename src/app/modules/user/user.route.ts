import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from './user.validation';

const userRouter = express.Router();

// Register user
userRouter.post(
  '/auth/register',
  validateRequest(UserValidations.userValidationSchema),
  UserControllers.registerUser,
);

export const UserRoutes = userRouter;
