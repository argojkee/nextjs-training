import { Heading } from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contacts: data,
    },
  };
};

const Contacts = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts page" />
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>
                <strong>{name}</strong>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;
