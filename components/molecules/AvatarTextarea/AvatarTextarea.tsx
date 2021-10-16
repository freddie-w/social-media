import Avatar from "@/components/atoms/Avatar";
import Textarea from "@/components/atoms/Textarea";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const AvatarTextarea: React.FC<Props> = ({ input, setInput }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <label htmlFor="New post" className="sr-only">
          New post
        </label>
        <div className="relative">
          <div className="absolute flex items-start justify-start w-auto h-full z-10 p-2">
            <Avatar
              href="#"
              imageUrl="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Name"
            />
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center"></div>
          <Textarea
            input={input}
            setInput={setInput}
            label="New post"
            placeholder="What's on your mind?"
            avatar
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarTextarea;
