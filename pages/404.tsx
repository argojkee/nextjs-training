import { Heading } from "../components/Heading";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Error = () => {
  const router = useRouter();
  const [timer, setTimer] = useState(3);
  useEffect(() => {
    const idx = setTimeout(() => {
      router.push("/");
    }, 3000);
    const idxInt = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(idxInt);
      clearTimeout(idx);
    };
  }, [router]);
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="404" />
      <Heading tag="h2" text="Sorry, something went wrong" />
      <Heading
        tag="h3"
        text={`You will be back to home after ${timer}seconds`}
      />
    </>
  );
};

export default Error;
