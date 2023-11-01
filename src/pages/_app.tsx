import type {AppProps} from "next/app";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Card from "../components/Card";

import "../globals.css";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Next.js app directory workshop</title>
      </Head>
      <div className="flex flex-col items-stretch gap-6 min-h-vh max-w-4xl mx-auto p-6">
        <header>
          <Card>
            <Link href="/">
              <div className="flex flex-row items-center gap-[6px] p-3">
                <Image alt="ACME stores" height={32} src="/acme.svg" width={32} />
                <h1 className="text-white font-bold text-base">ACME Stores</h1>
              </div>
            </Link>
          </Card>
        </header>

        <main className="flex-1">
          <Card>
            <section className="p-4">
              <Component {...pageProps} />
            </section>
          </Card>
        </main>

        <footer>
          <Card>
            <div className="flex flex-row items-center justify-between p-3">
              <div className="flex flex-row items-center gap-1">
                <span>By</span> <Image alt="Vercel Logo" height={16} src="/vercel.svg" width={72} />
              </div>
              <div className="flex flex-row items-center gap-1">
                <Image alt="Next.js logo" height={32} src="/nextjs.svg" width={32} />
                <p>App Directory workshop</p>
              </div>
            </div>
          </Card>
        </footer>
      </div>
    </>
  );
};

export default App;
