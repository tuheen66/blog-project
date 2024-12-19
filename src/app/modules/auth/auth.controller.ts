import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authServices } from './auth.service';

const register = catchAsync(async (req, res) => {
  const result = await authServices.register(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User registered successfully',
    data: {
      _id: result._id,
      name: result.name,
      email: result.email,
    },
  });
});

const login = catchAsync(async (req, res) => {
    const result = await authServices.login(req.body);
    
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'User logged in successfully',
        data: result,
    });
    

})

export const AuthControllers = {
  register,
  login
};
