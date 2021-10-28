import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
        token.id = account.id;
        token.provider = account.provider;
      }

      return token;
    },
    async session(session, token) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
        session.id = token.id;
        session.provider = token.provider;
      }

      return session;
    },
  },
  jwt: {
    secret: process.env.SECRET,
  },
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      // scope: "read:user",
    }),
    // Providers.Email({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/welcome", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});
