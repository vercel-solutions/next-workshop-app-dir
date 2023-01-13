import Page from "../components/Page";

import "../globals.css";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({children}: Props) {
  return (
    <html>
      <head />
      <body>
        <Page>{children}</Page>
      </body>
    </html>
  );
}
