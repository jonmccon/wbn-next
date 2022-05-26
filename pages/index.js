import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import Date from '../components/date'
import ThreeCanvas from '../components/threeCanvas'

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <ThreeCanvas>
      <div className={utilStyles.scene}>
      </div>
      </ThreeCanvas>
      
    
      <section className={utilStyles.headingMd}>
        <p>IAMA DESIGNER / PHOTOGRAPHER / TINKERER / RESEARCHER / PROGRAMMER / SAILOR / PODCASTER / FOUNDER / READER —LET’S BUILD TOGETHER.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>List of md based posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}




// example of threejs follow mouse
// texture file may be on the mbp bu drive 
// https://codepen.io/prisoner849/pen/yGMWNg
// https://codepen.io/prisoner849/pen/XoRbNz









// 3rd party script loading
{/* 
<Script
src="https://connect.facebook.net/en_US/sdk.js"
strategy="lazyOnload"
onLoad={() =>
  console.log(`script loaded correctly, window.FB has been populated`)
}
/> 
*/}