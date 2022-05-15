import Link from 'next/link'
import Head from 'next/head'

import Layout from '../../components/layout';

export default function ProjectOne() {
  return (
    <Layout>
    <Head>
      <title>jonmccon</title>
    </Head>
      <h1>individual project page, title, description, images in grid per project</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}