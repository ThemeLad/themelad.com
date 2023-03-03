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
              <div className='column is-half is-offset-one-quarter'>
                <h1 className={`title is-size-1 my-4 ${styles.hasTextBolder}`}>
                  A <span className='has-text-green'>Theme Automation</span> Tool for <span className='is-underlined has-text-pink'>Static Websites</span></h1>
                <h2 className='subtitle mt-6 mb-5 has-text-grey-lighter'>Create themes that seamlessly support an ever-increasing number of static site generators, flat file CMS and blogging platforms.</h2>
                <div>
                  <button className='button is-medium is-success is-rounded is-outlined '>
                    <a href='https://github.com/ThemeLad' target='_blank'>
                      <span className='mr-3'>Join Us on Github</span>
                      <span style={{ position: 'relative', top: '5px' }}><Github color='#fff' /></span>
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
