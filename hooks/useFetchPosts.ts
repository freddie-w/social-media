import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export const useFetchPosts = (baseUrl: string, query: string) => {
  const { asPath } = useRouter();

  const path = asPath === "/" ? "" : asPath;

  useEffect(() => {
    console.log(`/api${baseUrl}${path}?${query}`);
  }, [baseUrl, path, query]);
};
