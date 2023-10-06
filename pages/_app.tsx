import "../styles/globals.scss";
import Layout from "../components/Layout";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default App;
