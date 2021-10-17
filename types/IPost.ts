export interface IPost {
  id: string;
  likes: {
    total: number;
    formatted: string;
  };
  comments: {
    total: number;
    formatted: string;
  };
  views: {
    total: number;
    formatted: string;
  };
  author: IAuthor;
  date: number;
  datetime: string;
  href: string;
  title: string;
  body: string;
}

export interface ISimplePost {
  id: number;
  author: IAuthor;
  body: string;
  comments: {
    total: number;
    formatted: string;
  };
  likes: {
    total: number;
    formatted: string;
  };
}

export interface IComment {
  id: number;
  body: string;
  date?: string;
  datetime?: string;
  author: IAuthor;
}

export interface IAuthor {
  name: string;
  imageUrl: string;
  href: string;
  alt?: string;
}
