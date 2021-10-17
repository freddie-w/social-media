import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export const useFetchPosts = (query: string) => {
  const { asPath } = useRouter();

  const path = asPath === "/" ? "" : asPath;

  useEffect(() => {
    console.log(`/api/posts${path}?${query}`);
  }, [path, query]);
};
