import { IPost } from "@/types/IPost";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

export const PostSchema = new mongoose.Schema<IPost>({
  id: {
    type: String,
    default: uuidv4(),
  },
  likes: {
    total: {
      type: Number,
      default: 0,
    },
    formatted: {
      type: String,
      default: "0",
    },
  },
  comments: {
    total: {
      type: Number,
      default: 0,
    },
    formatted: {
      type: String,
      default: "0",
    },
  },
  views: {
    total: {
      type: Number,
      default: 0,
    },
    formatted: {
      type: String,
      default: "0",
    },
  },
  author: {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
  },
  date: {
    type: Number,
    default: Date.now(),
  },
  href: String,
  body: {
    type: String,
    required: true,
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;
