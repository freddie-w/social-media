import mongoose from "mongoose";

export interface IUser extends mongoose.Document {}

export interface ISimpleUser {
  handle: string;
  name: string;
  imageUrl: string;
  href: string;
}
