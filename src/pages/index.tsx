import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { ArrowRight } from '@/components/Icons';

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
      <section className="hero is-large is-link">
        <div className="hero-body">
          <div className="container">
            <div className='columns'>
              <div className='column is-half'>
                <h1 className="title is-size-1 mb-4">Premium Themes for Static Websites</h1>
                <h2 className="subtitle mt-0">Choose from a variety of living, standards-compliant themes, tailored for static site generators</h2>
                <div>
                  <button className='button is-medium is-success'><span className='mr-2'>Explore Themes</span> <ArrowRight color='#fff' /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
