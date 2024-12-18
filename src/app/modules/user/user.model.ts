import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';


const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
}, {
    timestamps:true
});

export const User = model('User', userSchema);
