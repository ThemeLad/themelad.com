import { Html, Head, Main, NextScript } from "next/document";
import Navigation from '../components/Navbar';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
      </Head>
      <body>
        <Navigation />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
