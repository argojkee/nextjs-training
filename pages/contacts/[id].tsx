import { Heading } from "../../components/Heading";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";

//! Server Side Rendering - SSR
export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await resp.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contact: data,
    },
  };
};

const Contact = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
