import express from 'express';
import { BlogControllers } from './blog.controller';

const blogRouter = express.Router();

blogRouter.post('/blogs', BlogControllers.createBlog);

blogRouter.patch('/blogs/:id', BlogControllers.updateBlog);

blogRouter.delete('/blogs/:id', BlogControllers.deleteBlog);

blogRouter.get('/blogs', BlogControllers.getAllBlogs);

export const BlogRoutes = blogRouter;
