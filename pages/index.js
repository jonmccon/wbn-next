import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import Date from '../components/date'
import ThreeCanvas from '../components/three/Canvas'

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

      {/* Leaving out face map for now 
      <ThreeCanvas>
      <div className={utilStyles.scene}>
      </div>
      </ThreeCanvas>
       */}
    
      <section className={utilStyles.headingMd}>
        <p>IAMA DESIGNER / PHOTOGRAPHER / TINKERER / RESEARCHER / PROGRAMMER / SAILOR / PODCASTER / FOUNDER / READER —LET’S BUILD TOGETHER.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* <h2 className={utilStyles.headingLg}></h2> */}
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, subtitle, thumb }) => (
            <li className={utilStyles.listItem} key={id}>
              <Image 
              priority
              src={thumb}
              className={utilStyles.thumb}
              height={108}
              width={108}
              />
              <br />
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              
              <br />
              <small className={utilStyles.lightText}>
                {subtitle}
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