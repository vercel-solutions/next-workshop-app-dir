import type {AppProps} from "next/app";

import Page from "../components/Page";

import "../globals.css";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};

export default App;
