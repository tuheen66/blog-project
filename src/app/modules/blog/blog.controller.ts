/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { blogServices } from './blog.service';
// import { User } from '../user/user.model';

const createBlog = catchAsync(async (req, res) => {
  const body = req.body;
  const token = req.headers.authorization as string;
  const result = await blogServices.createBlog(body, token);

  
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const token = req.headers.authorization as string;

  const result = await blogServices.updateBlog(id, body, token);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await blogServices.getAllBlogs(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blogs fetched successfully',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization as string;
  const result = await blogServices.deleteBlog(id, token);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog deleted successfully',
  });
});

export const BlogControllers = {
  createBlog,
  updateBlog,
  getAllBlogs,
  deleteBlog,
};
