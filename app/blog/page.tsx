import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {},
  });
  return response.json();
}

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <h1>blog</h1>
      <ul>
        {posts.map((item: any) => (
          <li key={item.id}>
            <Link href={`/blog/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
