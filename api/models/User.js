import { mongoose, model } from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  user: String,
  email: { type: String, unique: true },
  password: String,
});

export const UserModel=model('User', userSchema);



