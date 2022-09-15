import type { NextPage } from 'next';
import Head from 'next/head';
import GradientBackground from '../components/base/gradient-background';
import Layout from '../components/base/layout';
import Banner from '../components/pages/home/banner';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lucas Masayuki</title>
        <meta name="description" content="Next blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <>
          <GradientBackground>
            <Banner />
          </GradientBackground>
        </>
      </Layout>
    </div>
  );
};

export default Home;
