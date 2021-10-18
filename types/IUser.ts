export interface IUser {
  firstName: string;
  lastName: string;
  handle: string;
  imageUrl: string;
  href?: string;
  settings: {};
}

export interface ISimpleUser {
  handle: string;
  name: string;
  imageUrl: string;
  href: string;
}
