import Layout from '@/components/layouts';
import HeaderCart from '@/components/shared/HeaderCart';
import MainInfo from '@/components/shared/MainInfo';
import Head from 'next/head';
import React from 'react';

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
    </Layout>
  );
};

export default HomePage;
