// import catchAsync from '../../utils/catchAsync';
// import sendResponse from '../../utils/sendResponse';
import { userServices } from './user.service';
// import StatusCodes from 'http-status-codes';

import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

// const registerUser = catchAsync(async (req, res) => {
//   const result = await userServices.registerUser(req.body);

//   sendResponse(res, {
//     statusCode: StatusCodes.CREATED,
//     success: true,
//     message: 'User registered successfully',
//     data: {
//       _id: result._id,
//       name: result.name,
//       email: result.email,
//     },
//   });
// });

const getAllUsers = catchAsync(async (req, res) => {

  const result = await userServices.getAllUsers();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'All users fetched successfully',
    data: result,
  });
})

export const UserControllers = {
//   registerUser,
getAllUsers
};
