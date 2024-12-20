/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { adminServices } from './admin.service';

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await adminServices.deleteBlog(id);

  sendResponse(res, {
    success: true,
    message: 'Blog deleted successfully',
    statusCode: StatusCodes.OK,
  });
});

const blockUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await adminServices.blockUser(id);

  sendResponse(res, {
    success: true,
    message: 'User blocked successfully',
    statusCode: StatusCodes.OK,
  });
});

export const AdminController = {
  deleteBlog,
  blockUser,
};
