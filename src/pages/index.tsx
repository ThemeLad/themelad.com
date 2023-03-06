import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { Github } from '@/components/Icons';
import styles from '@/styles/home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>ThemeLad | Home</title>
        <meta name='description' content='Premium Themes for Static Websites' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className={`hero is-fullheight is-black ${styles.herobg}`}>
        <div className='hero-head'>
          <Navbar isHome />
        </div>
        <div className='hero-body has-text-centered'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-8 is-offset-2'>
                <h1 className={`title is-size-1 my-4 ${styles.hasTextBolder}`}>
                  <p>An <span className='has-text-green'>Open Source</span> Theme Library</p>
                  <p>for <span className='is-underlined has-text-pink'>Static Websites</span></p>
                </h1>
                <h2 className='subtitle mt-6 mb-5 has-text-grey-light'>ThemeLad aims to couple beautiful design with the power of automation to create and maintain themes across a wide variety of static site generators and flat file CMS platforms.</h2>
                <div>
                  <button className='button is-medium is-success is-rounded is-outlined '>
                    <a href='https://github.com/ThemeLad' target='_blank'>
                      <span className='mr-3'>Join us on Github</span>
                      <span style={{ position: 'relative', top: '4px' }}><Github color='#fff' /></span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
