import AvatarTextarea from "@/components/molecules/AvatarTextarea";
import { useState } from "react";
import DangerModal from "@/components/organisms/DangerModal";
import { IPost } from "@/types/IPost";

interface Props {
  setToggleCreatePost: React.Dispatch<React.SetStateAction<boolean>>;
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
}

const NewPost: React.FC<Props> = ({ setToggleCreatePost, posts, setPosts }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const discardEmptyPost = () => {
    if (!input) {
      setToggleCreatePost(false);
    } else {
      setOpen(true);
    }
  };

  const cancelPost = () => {
    setInput("");
    setOpen(false);
    setToggleCreatePost(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: IPost = {
      id: "143242432",
      likes: {
        total: 45,
        formatted: "45",
      },
      replies: {
        total: 1,
        formatted: "1",
      },
      views: {
        total: 20,
        formatted: "20",
      },
      author: {
        name: "Dries Vincent",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        href: "#",
      },
      date: "December 9 at 11:43 AM",
      datetime: "2020-12-09T11:43:00",
      href: "#",
      title: "What would you have done differently if you ran Jurassic Park?",
      body: input,
    };

    setPosts([newPost, ...posts]);
    setToggleCreatePost(false);
    setInput("");
  };

  return (
    <>
      <DangerModal
        title="Discard post"
        description="Are you sure you want to discard your post? All of your data will be permanently lost. This action cannot be undone."
        dangerBtn="Discard"
        open={open}
        setOpen={setOpen}
        onClose={cancelPost}
      />

      <div className="">
        <form
          onSubmit={handleSubmit}
          className="bg-white px-4 py-6 space-y-4 shadow sm:p-6 sm:rounded-lg"
        >
          <h1>Create a new post</h1>

          <AvatarTextarea input={input} setInput={setInput} />

          <div className="flex flex-col sm:flex-row-reverse justify-start">
            <button
              type="submit"
              className="btn-primary mb-3 mr-0 sm:mb-0 sm:ml-3"
            >
              Publish
            </button>
            <button
              type="reset"
              className="btn-secondary"
              onClick={discardEmptyPost}
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPost;
