import Avatar from "@/components/atoms/Avatar";
import Input from "@/components/atoms/Input";

const CommentBar = () => {
  return (
    <div className="flex items-center justify-center">
      <Avatar
        href="#"
        imageUrl="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Name"
      />
      <div className="w-full ml-3">
        <label htmlFor="comment" className="sr-only">
          Comment
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center"></div>
          <Input label="comment" placeholder="Your comment" />
        </div>
      </div>
    </div>
  );
};

export default CommentBar;
