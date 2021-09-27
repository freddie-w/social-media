import { classNames } from "@/lib/classNames";
import { useState } from "react";
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

const Feed: React.FC = () => {
  const [tabs, setTabs] = useState(feedTabs);

  const handleTabChange = (index: number) => {
    const resetCurrent = tabs.map((item) => ({ ...item, current: false }));
    resetCurrent[index].current = true;

    setTabs(resetCurrent);
  };

  return (
    <main className="lg:col-span-9 xl:col-span-6">
      <div className="px-4 sm:px-0">
        <div className="sm:hidden">
          <label htmlFor="post-tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="post-tabs"
            className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"
            defaultValue={tabs.find((tab) => tab?.current)?.name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav
            className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
            aria-label="Tabs"
          >
            {tabs.map((tab, index) => (
              <a
                onClick={() => handleTabChange(index)}
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? "page" : undefined}
                className={classNames(
                  tab.current
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700",
                  index === 0 ? "rounded-l-lg" : "",
                  index === tabs.length - 1 ? "rounded-r-lg" : "",
                  "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                )}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    tab.current ? "bg-rose-500" : "bg-transparent",
                    "absolute inset-x-0 bottom-0 h-0.5"
                  )}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
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

export default Feed;
