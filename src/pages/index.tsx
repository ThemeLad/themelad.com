import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>ThemeLad | Home</title>
        <meta name="description" content="Premium Themes for Static Websites" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="hero is-medium is-link">
        <div className="hero-body">
          <h1 className="title has-text-centered">Premium Themes for Static Websites</h1>
          <h2 className="subtitle has-text-centered">Choose from a variety of living, standards-compliant themes, tailored for static site generators</h2>
          <div className="has-text-centered">
            <button className='button is-light'>Explore Themes</button>
          </div>
        </div>
      </section>
    </>
  );
}
