"use client";
import Link from "next/link";
// import useSWR from "swr";
import { usePosts } from "@/store";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

const Posts = () => {
  // const {} = useSWR('posts');
  const [posts, loading, getAllPosts] = usePosts(
    (state) => [state.posts, state.loading, state.getAllPosts],
    shallow
  );

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <ul>
          {posts.map((item: any) => (
            <li key={item.id}>
              <Link href={`/blog/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export { Posts };
