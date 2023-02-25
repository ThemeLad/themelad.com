import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Pricing() {
  return (
    <>
      <Head>
        <title>ThemeLad | Pricing</title>
        <meta name="description" content="Premium Themes for Static Websites" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>Pricing</h1>
    </>
  );
};
