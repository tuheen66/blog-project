import QueryBuilder from '../../builder/queryBuilder';
import { blogSearchableFields } from './blog.constant';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlog = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const updateBlog = async (id: string, payload: TBlog) => {
  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const getAllBlogs = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find(), query)
    .search(blogSearchableFields)
    .filter()
    .sort();

  const result = await blogQuery.modelQuery;
  return result;
};

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const blogServices = {
  createBlog,
  updateBlog,
  getAllBlogs,
  deleteBlog,
};
