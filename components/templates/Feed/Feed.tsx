import { useState, useEffect } from "react";
import {
  FireIcon,
  HomeIcon,
  TrendingUpIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import TabControl from "@/components/organisms/TabControl";
import Post, { SkeletonPost } from "@/components/organisms/Post";
import Navbar from "@/components/organisms/Navbar";
import StickySideNav from "@/components/organisms/StickySideNav";
import SnapshotCard from "@/components/organisms/SnapshotCard";
import SimpleProfile from "@/components/molecules/SimpleProfile";
import SimplePost from "@/components/molecules/SimplePost";
import ITab from "@/types/ITab";
import { IPost, ISimplePost } from "@/types/IPost";
import { ISimpleUser } from "@/types/IUser";
import NewPostForm from "@/components/organisms/NewPostForm";

interface Props {
  initialPosts: IPost[];
  whoToFollow: ISimpleUser[];
  trendingPosts: ISimplePost[];
}

const primaryNavigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Popular", href: "/popular", icon: FireIcon },
  { name: "Communities", href: "/communities", icon: UserGroupIcon },
  { name: "Trending", href: "/trending", icon: TrendingUpIcon },
];

const secondaryNavigation = {
  title: "My Communities",
  items: [
    { name: "Movies", href: "#" },
    { name: "Food", href: "#" },
    { name: "Sports", href: "#" },
    { name: "Animals", href: "#" },
    { name: "Science", href: "#" },
    { name: "Dinosaurs", href: "#" },
    { name: "Talents", href: "#" },
    { name: "Gaming", href: "#" },
  ],
};

const initialTabs = [
  { name: "Most Liked", query: "liked", current: true },
  { name: "Most Comments", query: "comments", current: false },
  { name: "New", query: "new", current: false },
];

const Feed: React.FC<Props> = ({
  initialPosts,
  whoToFollow,
  trendingPosts,
}) => {
  const [toggleCreatePost, setToggleCreatePost] = useState(false);
  const [tabs, setTabs] = useState(initialTabs);
  const [posts, setPosts] = useState(initialPosts);

  const handleTabChange = (index: number) => {
    const resetCurrent = tabs.map((item: ITab) => ({
      ...item,
      current: false,
    }));
    resetCurrent[index].current = true;
    setTabs(resetCurrent);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const skeletonTimer = setTimeout(() => {
      setLoading(false);
    }, 750);

    return () => clearTimeout(skeletonTimer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Navbar
        toggleCreatePost={toggleCreatePost}
        setToggleCreatePost={setToggleCreatePost}
      />

      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <StickySideNav
              primaryNavigation={primaryNavigation}
              secondaryNavigation={secondaryNavigation}
            />
          </div>

          <main className="lg:col-span-9 xl:col-span-6">
            {toggleCreatePost ? (
              <NewPostForm
                setToggleCreatePost={setToggleCreatePost}
                posts={posts}
                setPosts={setPosts}
              />
            ) : (
              <>
                <TabControl tabs={tabs} handleTabChange={handleTabChange} />
                <div className="mt-4">
                  <h1 className="sr-only">Recent posts</h1>
                  <ul role="list" className="space-y-4">
                    {loading ? (
                      <SkeletonPost />
                    ) : (
                      posts.map((post) => <Post key={post.id} {...post} />)
                    )}
                  </ul>
                </div>
              </>
            )}
          </main>

          <aside className="hidden xl:block xl:col-span-4">
            <div className="sticky top-4 space-y-4">
              <SnapshotCard title="Who to follow" href="#">
                {whoToFollow.map((user) => (
                  <SimpleProfile key={user.handle} {...user} />
                ))}
              </SnapshotCard>

              <SnapshotCard title="Trending" href="#">
                {trendingPosts.map((post) => (
                  <SimplePost key={post.id} {...post} />
                ))}
              </SnapshotCard>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Feed;