import Layout from '@/components/layouts';
import HeaderCart from '@/components/shared/HeaderCart';
import Head from 'next/head';
import React from 'react';

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>CMC</title>
      </Head>
      {/*  */}
      <HeaderCart />

      {/* Info */}
      <div className='text-center my-20 md:m-10'>
        {/* Info one */}
        <div className='my-4'>
          <h3 className='text-mainLightColor text-xl py-2'>BUILT ON 30 YEARS OF TRUST</h3>
          <p className='font-light tracking-wide text-sm md:text-lg'>
            With more than 30 years of experience in assisting our clients
            reaching their immigration and business set up goals in Dubai, we
            now have expanded our services internationally to include
            Commonwealth of Dominica's citizenship by investment programs.{' '}
          </p>
        </div>
        {/* Info one */}

        {/* Info two */}
        <div>
          <h3 className='text-mainLightColor text-xl py-2'>PROFESSIONALISM IS OUR MOTTO</h3>
          <p className='font-light tracking-wide text-sm md:text-lg'>
            We are partnered with Authorized CBIU Agents that have a great deal
            of experience in handling citizenship by investment applications. We
            provide you with professional guidance on preparing and submitting
            your documents and assist you through every step of your
            application.
          </p>
        </div>
        {/* Info two */}

        {/* Info three */}
        <div>
          <h3 className='text-mainLightColor text-xl py-2'>WE ARE BY YOUR SIDE ALL ALONG</h3>
          <p className='font-light tracking-wide text-sm md:text-lg'>
            The first step is for us to work with you to find out exactly what
            you need. Through our understanding of the law and applying it to
            your circumstances, we will craft a path to success for you to
            ensure you obtain your second citizenship as early as possible.
          </p>
        </div>
        {/* Info three */}
      </div>
      {/* Info */}
    </Layout>
  );
};

export default HomePage;
