import type {AppProps} from "next/app";

import Head from "next/head";

import Page from "../components/Page";

import "../globals.css";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <Page>
      <Head>
        <title>Next.js app directory workshop</title>
      </Head>
      <Component {...pageProps} />
    </Page>
  );
};

export default App;
