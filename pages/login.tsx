import { connectToDatabase } from "@/lib/mongodb";
import Provider from "models/Provider";
import User from "models/User";
import { getProviders, signIn, getSession } from "next-auth/client";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();

  const session = await getSession(context);

  if (session) {
    connectToDatabase();

    // Get user id from OAuth provider, check if it exists in providers collection in the database
    const id = session.id;
    const providerExists = await Provider.findOne({ id: id });

    // If it doesn't exist, create a document in providers collection and redirect to the welcome page
    if (!providerExists) {
      await Provider.create({ id: id, name: session.provider });

      return {
        redirect: {
          permanent: false,
          destination: "/welcome",
        },
      };
      // If the provider document does exist, check if a document has been created in the users collection with the OAuth provider id
    } else if (providerExists) {
      const userExists = await User.findOne({ id: id });

      // If it exists, signup has been completed. Redirect to home
      if (userExists) {
        return {
          redirect: {
            permanent: false,
            destination: "/",
          },
        };
        // Otherwise, redirect to welcome to complete signup
      } else {
        return {
          redirect: {
            permanent: false,
            destination: "/welcome",
          },
        };
      }
    }
  }

  // By default, return all providers
  return {
    props: { providers },
  };
};

interface Props {
  providers: {
    name: string;
    id: string;
  }[];
}

export default function SignIn({ providers }: Props) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}
