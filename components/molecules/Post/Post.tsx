import {
  ChatAltIcon,
  CodeIcon,
  EyeIcon,
  FlagIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import MoreDropdown from "../MoreDropdown";

interface Props {
  id: string;
  likes: string;
  replies: string;
  views: string;
  author: {
    name: string;
    imageUrl: string;
    href: string;
  };
  date: string;
  datetime: string;
  href: string;
  title: string;
  body: string;
}

const dropdownItems = [
  {
    name: "Add to favourites",
    href: "#",
    icon: StarIcon,
  },
  {
    name: "Embed",
    href: "#",
    icon: CodeIcon,
  },
  {
    name: "Report content",
    href: "#",
    icon: FlagIcon,
  },
];

const Post: React.FC<Props> = (post) => {
  return (
    <li
      key={post.id}
      className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg"
    >
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
          <h2 id={"post-title-" + post.id} className="mt-4">
            {post.title}
          </h2>
        </div>
        <div
          className="mt-2 text-sm text-gray-700 space-y-4"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
        <div className="mt-6 flex justify-between space-x-8">
          <div className="flex space-x-6">
            <span className="inline-flex items-center text-sm">
              <button
                type="button"
                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
              >
                <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">{post.likes}</span>
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
                  {post.replies}
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
                <span className="font-medium text-gray-900">{post.views}</span>
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
      </article>
    </li>
  );
};

export default Post;
