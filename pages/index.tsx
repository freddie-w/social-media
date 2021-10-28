import PostFeed from "@/components/templates/PostFeed";
import { connectToDatabase } from "@/lib/mongodb";
import { IPost } from "@/types/IPost";
import Post from "models/Post";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/client";

const whoToFollow = [
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];
const trendingPosts = [
  {
    id: 1,
    author: {
      name: "Floyd Miles",
      imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    body: "What books do you have on your bookshelf just to look smarter than you actually are?",
    comments: { total: 291, formatted: "291" },
    likes: { total: 29, formatted: "29" },
  },
  // More posts...
];

export const getServerSideProps: GetServerSideProps = async (context) => {
  connectToDatabase();

  const res = await Post.find();

  const data = JSON.parse(JSON.stringify(res));

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data,
    },
  };
};

interface Props {
  posts: IPost[];
}

export default function Home({ posts }: Props) {
  const [session] = useSession();

  return (
    <PostFeed
      initialPosts={posts}
      whoToFollow={whoToFollow}
      trendingPosts={trendingPosts}
    />
    // <div className="p-10 flex justify-center items-center">
    //   {session ? (
    //     <div>
    //       <h1>Signed in</h1>
    //       <button
    //         className="btn-primary"
    //         onClick={(e) => {
    //           e.preventDefault();
    //           signOut();
    //         }}
    //       >
    //         Sign out
    //       </button>
    //     </div>
    //   ) : (
    //     <div>
    //       <h1> NO SESSION DETECTED</h1>
    //       <button
    //         className="btn-primary"
    //         onClick={(e) => {
    //           e.preventDefault();
    //           signIn();
    //         }}
    //       >
    //         Sign in
    //       </button>
    //     </div>
    //   )}
    // </div>
  );
}
