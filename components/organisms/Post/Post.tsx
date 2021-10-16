import MoreDropdown from "@/components/molecules/MoreDropdown";
import {
  ChatAltIcon,
  EyeIcon,
  FlagIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { IPost } from "@/types/IPost";
import { useState } from "react";
import { classNames } from "@/lib/classNames";
import AvatarInput from "@/components/molecules/AvatarInput";
import Comment from "@/components/molecules/Comment";

const dropdownItems = [
  {
    name: "Add to favourites",
    href: "#",
    icon: StarIcon,
  },
  {
    name: "Report content",
    href: "#",
    icon: FlagIcon,
  },
];

const initialComments = [
  {
    id: 1234,
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi harum provident reprehenderit atque voluptatibus repellendus eum voluptas corporis minus rerum?",
    date: "none",
    datetime: "none",
    author: {
      name: "Freddie Wellfair",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      alt: "Name",
    },
  },
  {
    id: 35435543,
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "none",
    datetime: "none",
    author: {
      name: "Freddie Wellfair",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      alt: "Name",
    },
  },
  {
    id: 432423423,
    body: "Lorem ipsum dolor sit amet, consectetur",
    date: "none",
    datetime: "none",
    author: {
      name: "Freddie Wellfair",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      alt: "Name",
    },
  },
];

const Post: React.FC<IPost> = (post) => {
  const [liked, setLiked] = useState(false);
  const [input, setInput] = useState("");
  const [comments, setComments] = useState(initialComments);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) {
      return;
    }

    const newComment = {
      id: 456666666,
      body: "New Comment",
      date: "none",
      datetime: "none",
      author: {
        name: "Freddie Wellfair",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "Name",
      },
    };

    setComments([newComment, ...comments]);
  };

  return (
    <li className="px-4 py-6 card">
      <article aria-labelledby={"post-title-" + post.id}>
        <div>
          <div className="flex space-x-3">
            <a href="#" className="relative flex-shrink-0 h-10 w-10">
              <Image
                src={post.author.imageUrl}
                layout="fill"
                className="rounded-full"
                alt=""
              />
            </a>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">
                <a href={post.author.href} className="hover:underline">
                  {post.author.name}
                </a>
              </p>
              <p className="text-sm text-gray-500">
                <a href={post.href} className="hover:underline">
                  <time dateTime={post.datetime}>{post.date}</time>
                </a>
              </p>
            </div>
            <MoreDropdown dropdownItems={dropdownItems} />
          </div>
          {/* <h2 id={"post-title-" + post.id} className="mt-4">
            {post.title}
          </h2> */}
        </div>
        <div
          className="mt-4 text-sm text-gray-700 space-y-4"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
        <div className="mt-6 flex justify-between space-x-8">
          <div className="flex space-x-6">
            <span className="inline-flex items-center text-sm">
              <button
                onClick={() => setLiked(!liked)}
                type="button"
                className={classNames(
                  liked ? "text-gray-900" : "text-gray-400",
                  "inline-flex space-x-2  hover:text-gray-500"
                )}
              >
                <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">
                  {post.likes.formatted}
                </span>
                <span className="sr-only">likes</span>
              </button>
            </span>
            <span className="inline-flex items-center text-sm">
              <button
                type="button"
                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
              >
                <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">
                  {post.replies.formatted}
                </span>
                <span className="sr-only">replies</span>
              </button>
            </span>
            <span className="inline-flex items-center text-sm">
              <button
                type="button"
                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
              >
                <EyeIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">
                  {post.views.formatted}
                </span>
                <span className="sr-only">views</span>
              </button>
            </span>
          </div>
          <div className="flex text-sm">
            <span className="inline-flex items-center text-sm">
              <button
                type="button"
                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
              >
                <ShareIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">Share</span>
              </button>
            </span>
          </div>
        </div>
        <div className="mt-3 ">
          <div className="space-y-2 flex flex-col items-start">
            {comments.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full mt-3">
          <AvatarInput input={input} setInput={setInput} />
        </form>
      </article>
    </li>
  );
};

export default Post;
