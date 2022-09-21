import type { NextPage } from 'next';
import Head from 'next/head';
import GradientBackground from '../components/base/gradient-background';
import Layout from '../components/base/layout';
import AboutSection from '../components/pages/home/about-section';
import Banner from '../components/pages/home/banner';
import ContactSection from '../components/pages/home/contact-section';
import ExperienceSection from '../components/pages/home/experience-section';
import SideProjectSection from '../components/pages/home/side-projects-section';

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
          <AboutSection />
          <ExperienceSection />
          <SideProjectSection />
          <ContactSection />
        </>
      </Layout>
    </div>
  );
};

export default Home;
