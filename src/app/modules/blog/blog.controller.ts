import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { blogServices } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await blogServices.createBlog(body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const result = await blogServices.updateBlog(id, body);
    
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Blog updated successfully',
        data: result,
    });
})

const getAllBlogs = catchAsync(async (req, res) => {
    const result = await blogServices.getAllBlogs();
    
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'All blogs fetched successfully',
        data: result,
    });
});

const deleteBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await blogServices.deleteBlog(id);
    
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Blog deleted successfully',
        data: result,
    });
})

export const BlogControllers = {
  createBlog,
  updateBlog,
  getAllBlogs,
  deleteBlog
};
