import Avatar from "@/components/atoms/Avatar";
import { PlusSmIcon } from "@heroicons/react/solid";

interface Props {
  user: {
    handle: string;
    name: string;
    imageUrl: string;
    href: string;
  };
}

const SimpleProfile: React.FC<Props> = ({ user }) => {
  return (
    <li key={user.handle} className="flex items-center py-4 space-x-3">
      <Avatar href={user.href} imageUrl={user.imageUrl} alt={user.name} />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-900">
          <a href={user.href}>{user.name}</a>
        </p>
        <p className="text-sm text-gray-500">
          <a href={user.href}>{"@" + user.handle}</a>
        </p>
      </div>
      <div className="flex-shrink-0">
        <button
          type="button"
          className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
        >
          <PlusSmIcon
            className="-ml-1 mr-0.5 h-5 w-5 text-rose-400"
            aria-hidden="true"
          />
          <span>Follow</span>
        </button>
      </div>
    </li>
  );
};

export default SimpleProfile;
