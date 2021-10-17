import { connectToDatabase } from "@/lib/mongodb";
import Post from "models/Post";
import type { NextApiRequest, NextApiResponse } from "next";

connectToDatabase();

type Data =
  | { message: string; posts: any[] }
  | { message: string }
  | { message: string; id: string }
  | { message: string; post: any };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const posts = await Post.find();

    res.status(200).json({ message: "Success", posts: posts });
  } else if (req.method === "POST") {
    const { input } = req.body;

    const test = await Post.create({
      author: {
        name: "Test",
        imageUrl:
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        href: "/",
      },
      body: input,
    });

    res.status(200).json({ message: "Success", post: test });
    // res.status(200).json({ message: "Success", post: newPost });
  } else {
    res.status(400).json({ message: "Method not supported" });
  }
}
