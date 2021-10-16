import Avatar from "@/components/atoms/Avatar";
import { classNames } from "@/lib/classNames";
import { ISimplePost } from "@/types/IPost";
import { ChatAltIcon, ThumbUpIcon } from "@heroicons/react/solid";
import { useState } from "react";

const SimplePost: React.FC<ISimplePost> = (post) => {
  const [liked, setLiked] = useState(false);
  const { author } = post;

  return (
    <li key={post.id} className="flex py-4 space-x-3">
      <Avatar href={author.href} imageUrl={author.imageUrl} alt={author.name} />
      <div className="min-w-0 flex-1">
        <p className="text-sm text-gray-800">{post.body}</p>
        <div className="mt-2 space-x-6 flex">
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
                {post.comments.formatted}
              </span>
            </button>
          </span>
        </div>
      </div>
    </li>
  );
};

export default SimplePost;
