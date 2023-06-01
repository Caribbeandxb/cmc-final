import Layout from '@/components/layouts';
import CommonQuestions from '@/components/shared/CommonQuestions';
import HeaderCart from '@/components/shared/HeaderCart';
import MainInfo from '@/components/shared/MainInfo';
// import Partners from '@/components/shared/Partners';
import Head from 'next/head';
const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>CMC</title>
        <meta
          property='og:title'
          content='cmc'
          key='caribbean management consultancies'
        />
        <meta
          property='og:description'
          content='cmc landing page - general information'
          key='ogdesc'
        />
        <meta property='og:image' content='/images/logo-tr.png' key='ogimage' />
        <meta
          property='og:site_name'
          content='caribbean management consultancies'
          key='ogsitename'
        />
        <meta
          property='og:url'
          content='https:/www.caribbeandxb.com/'
          key='ogurl'
        />
        <meta property='og:type' content='profile' key='ogtype' />
        <meta name='google' content='notranslate' key='notranslate' />
        <meta name='robots' content='all' />
      </Head>
      {/* main header */}
      <HeaderCart />
      {/* main info */}
      <MainInfo />
      {/* common question cart */}
      <CommonQuestions />
      {/* partners logo */}
      {/* <Partners /> */}
    </Layout>
  );
};

export default HomePage;
