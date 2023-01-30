import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

import Card from "./Card";
import Stack from "./Stack";
import Text from "./Text";

interface Props {
  children: React.ReactNode;
}

const Page: React.FC<Props> = ({children}) => {
  return (
    <Stack
      alignItems="stretch"
      style={{
        minHeight: "100vh",
        maxWidth: "56rem",
        width: "100%",
        margin: "auto",
        padding: 24,
      }}
    >
      <header>
        <Card>
          <Link href="/">
            <Stack alignItems="center" direction="row" gap={6} padding={12}>
              <Image alt="ACME stores" height={32} src="/acme.svg" width={32} />
              <Text color="white" size={16} weight="bold">
                ACME Stores
              </Text>
            </Stack>
          </Link>
        </Card>
      </header>

      <main style={{flex: 1}}>
        <Card>
          <Stack
            alignItems="center"
            justifyContent="center"
            padding={24}
            style={{
              width: "100%",
              flex: 1,
            }}
          >
            {children}
          </Stack>
        </Card>
      </main>

      <footer>
        <Card>
          <Stack alignItems="center" direction="row" justifyContent="space-between" padding={12}>
            <Stack alignItems="center" direction="row" gap={4}>
              <Text>By</Text> <Image alt="Vercel Logo" height={16} src="/vercel.svg" width={72} />
            </Stack>
            <Stack alignItems="center" direction="row" gap={4}>
              <Image alt="Next.js logo" height={32} src="/nextjs.svg" width={32} />
              <p>App Directory workshop</p>
            </Stack>
          </Stack>
        </Card>
      </footer>
    </Stack>
  );
};

export default Page;
