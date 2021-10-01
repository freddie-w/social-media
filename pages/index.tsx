import {
  FireIcon,
  HomeIcon,
  TrendingUpIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import Navbar from "@/components/molecules/Navbar";
import HomeFeed from "@/components/organisms/HomeFeed";
import StickySideNav from "@/components/molecules/StickySideNav";
import SnapshotCard from "@/components/molecules/SnapshotCard";
import SimpleProfile from "@/components/molecules/SimpleProfile";
import SimplePost from "@/components/molecules/SimplePost";

const whoToFollow = [
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];
const trendingPosts = [
  {
    id: 1,
    user: {
      name: "Floyd Miles",
      imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    body: "What books do you have on your bookshelf just to look smarter than you actually are?",
    comments: 291,
  },
  // More posts...
];

const primaryNavigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Popular", href: "#", icon: FireIcon, current: false },
  { name: "Communities", href: "#", icon: UserGroupIcon, current: false },
  { name: "Trending", href: "#", icon: TrendingUpIcon, current: false },
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

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Navbar />

      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <StickySideNav
              primaryNavigation={primaryNavigation}
              secondaryNavigation={secondaryNavigation}
            />
          </div>

          <HomeFeed />

          <aside className="hidden xl:block xl:col-span-4">
            <div className="sticky top-4 space-y-4">
              <SnapshotCard title="Who to follow" href="#">
                {whoToFollow.map((user) => (
                  <SimpleProfile key={user.handle} user={user} />
                ))}
              </SnapshotCard>

              <SnapshotCard title="Trending" href="#">
                {trendingPosts.map((post) => (
                  <SimplePost key={post.id} post={post} />
                ))}
              </SnapshotCard>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
