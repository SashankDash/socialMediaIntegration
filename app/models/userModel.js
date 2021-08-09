import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        userId:{
            type: String, 
        required: true,
        },
      name: { type: String, 
        required: true, 
        trim: true },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
      },
      picture: { type: String
        
      },
      emailVerified: { type:Boolean, 
        default:false},
    },{ timestamps: true }
  );
  
  export default mongoose.model('User', userSchema, 'users');