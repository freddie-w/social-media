import mongoose from "mongoose";

export const PostSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
});

const Post = mongoose.models.Todo || mongoose.model("Post", PostSchema);

export default Post;
