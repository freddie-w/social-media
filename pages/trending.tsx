import PostFeed from "@/components/templates/PostFeed";

const initialPosts = [
  {
    id: "81614",
    likes: {
      total: 29,
      formatted: "29",
    },
    comments: {
      total: 11,
      formatted: "11",
    },
    views: {
      total: 2700,
      formatted: "2.7k",
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
    body: `
        This is my first post.
      `,
  },
  // More questions...
];

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
    author: {
      name: "Floyd Miles",
      imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    body: "What books do you have on your bookshelf just to look smarter than you actually are?",
    comments: { total: 291, formatted: "291" },
    likes: { total: 29, formatted: "29" },
  },
  // More posts...
];

export default function Trending() {
  return (
    <PostFeed
      initialPosts={initialPosts}
      whoToFollow={whoToFollow}
      trendingPosts={trendingPosts}
    />
  );
}
