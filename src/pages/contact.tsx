import Head from 'next/head';
import Navbar from '@/components/Navbar';
import UnderConstruction from '@/components/UnderConstruction';

export default function Contact() {
  return (
    <>
      <Head>
        <title>ThemeLad | Contact</title>
        <meta name="description" content="Premium Themes for Static Websites" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <UnderConstruction />
    </>
  );
};
