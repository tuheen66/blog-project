import express from 'express';
import { BlogControllers } from './blog.controller';
import auth from '../../middlewares/auth';

const blogRouter = express.Router();

blogRouter.post('/blogs', auth('user'), BlogControllers.createBlog);

blogRouter.patch('/blogs/:id', auth('user'), BlogControllers.updateBlog);

blogRouter.delete('/blogs/:id', auth('user'), BlogControllers.deleteBlog);

blogRouter.get('/blogs', BlogControllers.getAllBlogs);

export const BlogRoutes = blogRouter;
