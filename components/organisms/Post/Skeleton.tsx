const SkeletonPost: React.FC = () => {
  return (
    <li className="px-4 py-6 card">
      <div className="animate-pulse space-y-8">
        <div className="flex space-x-3">
          <div className="h-10 w-10 bg-gray-200 rounded-full" />
          <div className="flex flex-col justify-center">
            <div className="h-2 w-32 mb-0.5 bg-gray-200 rounded-lg" />
            <div className="h-2 w-44 bg-gray-200 rounded-lg" />
          </div>
        </div>
        <div>
          <div className="mt-1 h-3 w-full bg-gray-200 rounded-lg" />
          <div className="mt-1 h-3 w-full bg-gray-200 rounded-lg" />
          <div className="mt-1 h-3 w-40 bg-gray-200 rounded-lg" />
        </div>
        <div className="flex space-x-3">
          <div className="h-8 w-8 bg-gray-200 rounded-full" />
          <div className="flex flex-col w-full justify-center">
            <div className="h-7 mb-0.5 bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default SkeletonPost;
