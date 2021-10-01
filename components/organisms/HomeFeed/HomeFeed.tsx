import { useState } from "react";
import TabControl from "@/components/molecules/TabControl";
import Post from "@/components/molecules/Post";

const feedTabs = [
  { name: "Recent", href: "#", current: true },
  { name: "Most Liked", href: "#", current: false },
  { name: "Most Answers", href: "#", current: false },
];

const posts = [
  {
    id: "81614",
    likes: "29",
    replies: "11",
    views: "2.7k",
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
    body: `
        <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
        <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
      `,
  },
  // More questions...
];

const HomeFeed: React.FC = () => {
  const [tabs, setTabs] = useState(feedTabs);

  const handleTabChange = (index: number) => {
    const resetCurrent = tabs.map((item) => ({ ...item, current: false }));
    resetCurrent[index].current = true;

    setTabs(resetCurrent);
  };

  return (
    <main className="lg:col-span-9 xl:col-span-6">
      <TabControl tabs={tabs} handleTabChange={handleTabChange} />
      <div className="mt-4">
        <h1 className="sr-only">Recent posts</h1>
        <ul role="list" className="space-y-4">
          {posts.map((question) => (
            <Post key={question.id} {...question} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default HomeFeed;
