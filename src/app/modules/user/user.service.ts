
// import { TUser } from './user.interface';
 import { User } from './user.model';

// const registerUser = async (payload: TUser) => {
//   const result = await User.create(payload);
//   return result;
// };

const getAllUsers = async () => {
  const result = await User.find();
  return result;
}

 export const userServices = {
//  registerUser,
getAllUsers
 };
