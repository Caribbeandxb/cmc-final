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
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta
          property='og:title'
          content='cmc'
          key='caribbean management consultancies'
        />
        <link rel='canonical' href='https://www.caribbeandxb.com/' />
        <meta name=' robots' content=' index, follow' />

        <meta
          name='description'
          content='caribbean management consultancies, home page and introduction to our services. make sure to check the rest of the website'
        />
        <meta
          name='google-site-verification'
          content='+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34='
        />

        <meta
          property='og:description'
          content='cmc landing page - general information'
          key='ogdesc'
        />
        <meta property='og:image' content='/images/logo_tr.png' key='ogimage' />
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
