import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { userServices } from './user.service';
import StatusCodes from 'http-status-codes';

const registerUser = catchAsync(async (req, res) => {
  const result = await userServices.registerUser(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

export const UserControllers = {
    registerUser,
};
