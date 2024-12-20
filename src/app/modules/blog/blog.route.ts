import express from 'express';
import { BlogControllers } from './blog.controller';
import auth from '../../middlewares/auth';

const blogRouter = express.Router();

blogRouter.post('/', auth('user'), BlogControllers.createBlog);

blogRouter.patch('/:id', auth('user'), BlogControllers.updateBlog);

blogRouter.delete('/:id', auth('user'), BlogControllers.deleteBlog);

blogRouter.get('/', BlogControllers.getAllBlogs);

export const BlogRoutes = blogRouter;
