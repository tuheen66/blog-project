/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { blogServices } from './blog.service';
import { User } from '../user/user.model';
// import { User } from '../user/user.model';

const createBlog = catchAsync(async (req, res) => {
  const body = req.body;
  const token = req.headers.authorization as string;
  const result = await blogServices.createBlog(body, token);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Blog created successfully',
    data: {
      _id: result._id,
      title: result.title,
      content: result.content,
      author: result.author,
    },
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const token = req.headers.authorization as string;

  const result = await blogServices.updateBlog(id, body, token);
  const author = await User.findById(result?.author);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog updated successfully',
    data: {
      _id: result?._id,
      title: result?.title,
      content: result?.content,
      author,
    },
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await blogServices.getAllBlogs(req.query);



  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blogs fetched successfully',
    data: result.map(blog => ({
      _id: blog._id,
      title: blog.title,
      content: blog.content,
      author: blog.author,
    })),
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
