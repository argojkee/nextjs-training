import { Heading } from "../components/Heading";
import style from "../styles/Home.module.scss";
import Head from "next/head";
import Socials from "../components/Socials";

export const getStaticProps = async () => {
  const resp = await fetch(`${process.env.API_HOST}/socials`);
  const data = await resp.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      socials: data,
    },
  };
};

const Home = ({ socials }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={style.wrapper}>
        <Heading text="Hello Next.js" />
        <Socials socials={socials} />
      </div>
    </>
  );
};

export default Home;
