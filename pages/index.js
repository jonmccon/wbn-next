import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';





// example of threejs follow mouse
// texture file may be on the mbp bu drive 
// https://codepen.io/prisoner849/pen/yGMWNg
// https://codepen.io/prisoner849/pen/XoRbNz




export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>IAMA DESIGNER / PHOTOGRAPHER / TINKERER / RESEARCHER / PROGRAMMER / SAILOR / PODCASTER / FOUNDER / READER —LET’S BUILD TOGETHER.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}





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