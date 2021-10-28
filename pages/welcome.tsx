import { getProviders, signIn, getSession, useSession } from "next-auth/client";
import { GetServerSideProps } from "next";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context);

//   return {
//     props: { session },
//   };
// };

export default function SignIn() {
  return (
    <>
      <p>welcome page. choose username etc here</p>
    </>
  );
}
