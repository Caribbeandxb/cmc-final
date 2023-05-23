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
