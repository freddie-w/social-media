import Avatar from "@/components/atoms/Avatar";

interface Props {
  body: string;
  date?: string;
  datetime?: string;
  author: {
    name: string;
    imageUrl: string;
    href: string;
  };
}

const Comment: React.FC<Props> = ({ body, author }) => {
  return (
    <div className="py-3 px-4 bg-gray-50 rounded-lg flex flex-shrink items-start justify-start">
      <Avatar href={author.href} imageUrl={author.imageUrl} alt={author.name} />
      <div className="ml-3">
        <a href="" className="inline-block">
          <p className="text-sm text-gray-900 font-medium">{author.name}</p>
        </a>
        <p className="text-xs text-gray-700">{body}</p>
        <p className="text-xs mt-1 text-gray-900 font font-medium">2h ago</p>
      </div>
    </div>
  );
};

export default Comment;
