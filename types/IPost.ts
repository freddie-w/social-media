export interface IPost {
  id: string;
  likes: string;
  replies: string;
  views: string;
  author: {
    name: string;
    imageUrl: string;
    href: string;
  };
  date: string;
  datetime: string;
  href: string;
  title: string;
  body: string;
}

export interface ISimplePost {
  id: number;
  user: {
    imageUrl: string;
    name: string;
    href: string;
  };
  body: string;
  comments: number;
}
