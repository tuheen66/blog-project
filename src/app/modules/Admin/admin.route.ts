import express from 'express';

import auth from '../../middlewares/auth';
import { AdminController } from './admin.controller';

const adminRouter = express.Router();

adminRouter.patch('/users/:id/block', auth('admin'), AdminController.blockUser);

adminRouter.delete('/blogs/:id', auth('admin'), AdminController.deleteBlog);


export const AdminRoutes = adminRouter;