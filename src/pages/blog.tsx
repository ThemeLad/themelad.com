import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Blog() {
  return (
    <>
      <Head>
        <title>ThemeLad | Blog</title>
        <meta name="description" content="Premium Themes for Static Websites" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>Blog</h1>
    </>
  );
};
