import type {AppProps} from "next/app";

import {Open_Sans} from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Card from "../components/Card";

import "../globals.css";

const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js app directory workshop</title>
      </Head>
      <div
        className={`${opensans.className} mx-auto flex min-h-screen max-w-4xl flex-col items-stretch gap-6 p-6 font-sans`}
      >
        <header>
          <Card>
            <Link href="/">
              <div className="flex flex-row items-center gap-[6px] p-3">
                <Image alt="ACME stores" height={32} src="/acme.svg" width={32} />
                <h1 className="text-base font-bold text-white">ACME Stores</h1>
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
            <div className="flex flex-row items-center justify-between p-3 text-white/70">
              <div className="flex flex-row items-center gap-1">
                <span>By</span> <Image alt="Vercel Logo" height={16} src="/vercel.svg" width={16} />
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
}

export default App;
