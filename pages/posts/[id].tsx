import PostInfo from "../../components/PostInfo";
import Head from "next/head";

export const getStaticPaths = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await resp.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
};

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Post;
