import { Blog } from '../blog/blog.model';
import { User } from '../user/user.model';

const deleteBlog = async (id: string) => {
  const data = await Blog.findByIdAndDelete(id);

  return data;
};

const blockUser = async (id: string) => {
  const result = await User.findByIdAndUpdate(
    id,
    { isBlocked: true },
    { new: true },
  );
  return result;
};

export const adminServices = {
  deleteBlog,
  blockUser
};
