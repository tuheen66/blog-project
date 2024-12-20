import QueryBuilder from '../../builder/queryBuilder';
import { blogSearchableFields } from './blog.constant';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';
import { User } from '../user/user.model';
import config from '../../config';
import jwt, { JwtPayload } from 'jsonwebtoken';
import AppError from '../../errors/AppError';
import { StatusCodes } from 'http-status-codes';

const createBlog = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const updateBlog = async (id: string, payload: TBlog, token: string) => {
  const data = await Blog.findById(id);

  const authorId = data?.author;
  const authorEmail = (await User.findById(authorId))?.email;

  if (!token) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authorized');
  }

  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string,
  ) as JwtPayload;

  const { email } = decoded;

  if (email !== authorEmail) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authorized');
  }

  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const getAllBlogs = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find().populate('author'), query)
    .search(blogSearchableFields)
    .sort()
    .filter()

  const result = await blogQuery.modelQuery;
  return result;
};

const deleteBlog = async (id: string, token: string) => {
  const data = await Blog.findById(id);

  const authorId = data?.author;
  const authorEmail = (await User.findById(authorId))?.email;

  if (!token) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authorized');
  }

  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string,
  ) as JwtPayload;

  const { email } = decoded;

  if (email !== authorEmail) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authorized');
  }

  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const blogServices = {
  createBlog,
  updateBlog,
  getAllBlogs,
  deleteBlog,
};
