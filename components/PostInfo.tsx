import { Heading } from "./Heading";

const PostInfo = ({ post }) => {
  const { title, body } = post;

  return (
    <>
      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
};

export default PostInfo;
