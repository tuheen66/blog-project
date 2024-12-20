import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
      
    },
    isPublished: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { timestamps: true },
);

export const Blog = model('Blog', blogSchema);
