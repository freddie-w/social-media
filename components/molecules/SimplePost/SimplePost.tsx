import Avatar from "@/components/atoms/Avatar";
import { ISimplePost } from "@/types/IPost";
import { ChatAltIcon } from "@heroicons/react/solid";

const SimplePost: React.FC<ISimplePost> = (post) => {
  const { user } = post;

  return (
    <li key={post.id} className="flex py-4 space-x-3">
      <Avatar href={user.href} imageUrl={user.imageUrl} alt={user.name} />
      <div className="min-w-0 flex-1">
        <p className="text-sm text-gray-800">{post.body}</p>
        <div className="mt-2 flex">
          <span className="inline-flex items-center text-sm">
            <button
              type="button"
              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
            >
              <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
              <span className="font-medium text-gray-900">{post.comments}</span>
            </button>
          </span>
        </div>
      </div>
    </li>
  );
};

export default SimplePost;
