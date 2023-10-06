import { Heading } from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data,
    },
  };
};

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts list" />
      <ul>
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;
