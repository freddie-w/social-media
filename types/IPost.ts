export interface IPost {
  id: string;
  likes: {
    total: number;
    formatted: string;
  };
  replies: {
    total: number;
    formatted: string;
  };
  views: {
    total: number;
    formatted: string;
  };
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

export interface IComment {
  id: number;
  body: string;
  date?: string;
  datetime?: string;
  author: {
    name: string;
    imageUrl: string;
    href: string;
  };
}
