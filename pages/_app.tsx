import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Provider, getSession } from "next-auth/client";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      session: await getSession(context),
    },
  };
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
