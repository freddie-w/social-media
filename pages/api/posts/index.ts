import { connectToDatabse } from "@/lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

type Data = { message: string; posts: [] } | { message: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Success", posts: [] });
  } else if (req.method === "POST") {
    const { input } = req.body;

    const newPost = {
      id: uuidv4(),
      likes: {
        total: 0,
        formatted: "0",
      },
      comments: {
        total: 0,
        formatted: "0",
      },
      views: {
        total: 1,
        formatted: "1",
      },
      author: {
        name: "Freddie Wellfair",
        imageUrl:
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        href: "/",
      },
      date: "test",
      datetime: "test2",
      href: "some_id",
      title: "",
      body: input,
    };

    res.status(200).json({ message: "Success", post: newPost });
  } else {
    res.status(400).json({ message: "Method not supported" });
  }
}
