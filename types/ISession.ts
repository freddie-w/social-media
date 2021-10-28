export interface ISession {
  accessToken: string;
  id: string;
  provider: string;
  expires: string;
  user: {
    name: string;
    email: string | null;
    image: string | null;
  };
}
