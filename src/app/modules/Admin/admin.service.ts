import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config';
import { Blog } from '../blog/blog.model';
import { User } from '../user/user.model';
import AppError from '../../errors/AppError';
import { StatusCodes } from 'http-status-codes';

const deleteBlog = async (id: string, bearerToken: string) => {
  const token = bearerToken.split(' ')[1] as string;

  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string,
  ) as JwtPayload;

  const { role } = decoded;

  if (role !== 'admin') {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authorized');
  }

  const data = await Blog.findByIdAndDelete(id);

  return data;
};

const blockUser = async (id: string, bearerToken: string) => {
  const token = bearerToken.split(' ')[1] as string;

  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string,
  ) as JwtPayload;

  const { role } = decoded;

  if (role !== 'admin') {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authorized');
  }

  const result = await User.findByIdAndUpdate(
    id,
    { isBlocked: true },
    { new: true },
  );
  return result;
};

export const adminServices = {
  deleteBlog,
  blockUser,
};
