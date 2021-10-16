import { useState, useEffect } from "react";
import {
  FireIcon,
  HomeIcon,
  TrendingUpIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import TabControl from "@/components/organisms/TabControl";
import Navbar from "@/components/organisms/Navbar";
import StickySideNav from "@/components/organisms/StickySideNav";
import SnapshotCard from "@/components/organisms/SnapshotCard";
import SimpleProfile from "@/components/molecules/SimpleProfile";
import SimplePost from "@/components/molecules/SimplePost";
import ITab from "@/types/ITab";
import { IPost, ISimplePost } from "@/types/IPost";
import { ISimpleUser } from "@/types/IUser";
import NewPostForm from "@/components/organisms/NewPostForm";
import Banner from "@/components/molecules/Banner";
import { useRouter } from "next/dist/client/router";
import { useTabControl } from "@/hooks/useTabControl";

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
    { name: "Movies", href: "/communities/movies" },
    { name: "Food", href: "/communities/food" },
    { name: "Sports", href: "/communities/sports" },
    { name: "Animals", href: "/communities/animals" },
    { name: "Science", href: "/communities/science" },
    { name: "Dinosaurs", href: "/communities/dinosaurs" },
    { name: "Talents", href: "/communities/talents" },
    { name: "Gaming", href: "/communities/gaming" },
  ],
};

const initialTabs = [
  { name: "Most Popular", query: "popular", current: true },
  { name: "Most Active", query: "active", current: false },
  { name: "New", query: "new", current: false },
];

const CommunitiesFeed: React.FC<Props> = ({
  initialPosts,
  whoToFollow,
  trendingPosts,
}) => {
  const [toggleCreatePost, setToggleCreatePost] = useState(false);
  const [posts, setPosts] = useState(initialPosts);
  const { tabs, toggleTab, query } = useTabControl(initialTabs);

  const handleTabChange = (index: number) => {
    toggleTab(index);

    // Every time tab changes, fetch relevant posts with tab query
    console.log(`/communities?${query}`);
  };

  // TODO: create Layout componentwith nav, sticky nav & extra bits

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
            <Banner title="Discover communities (nice banner)" />

            <TabControl tabs={tabs} handleTabChange={handleTabChange} />
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

export default CommunitiesFeed;
