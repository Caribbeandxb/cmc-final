import Layout from '@/components/layouts';
import Head from 'next/head';
import React from 'react';

const ProcessPage = () => {
  return (
    <Layout>
      <Head>
        <title>CMC | Process</title>
      </Head>
      <h3 className='tracking-wider text-xl text-center mb-10 font-bold  text-mainLightColor uppercase'>
        PROCESS AND ESTIMATED TIMELINE
      </h3>
      <article className='max-w-lg mx-auto block'>
        {/* first state */}
        <div className='border-b-2 mb-20'>
          <h1 className='font-medium text-secondaryLightColor text-2xl'>
            First Stage (Your Submissions)
          </h1>
          <p className='text-slate-500 text-sm'>
            This step usually takes about two to three weeks
          </p>
          <div className='mb-16'>
            <ul className='list-decimal ml-5'>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Filling out the application
              </li>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Providing the supporting documents
              </li>
              <li className='mb-3  p-3 text-lg first-letter:uppercase '>
                Initial payment of due diligence fee
              </li>
            </ul>
          </div>
        </div>
        {/* first state */}
        {/* second state */}
        <div className='border-b-2  mb-10'>
          <h1 className='font-medium text-secondaryLightColor text-2xl'>
            Second Stage (Government Processing)
          </h1>
          <p className='text-slate-500 text-sm'>
            This step usually takes about one to two months
          </p>
          <div className='mb-16'>
            <ul className='list-decimal ml-5'>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Application submitted to government
              </li>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Government processes the application
              </li>
            </ul>
          </div>
        </div>
        {/* second state */}
        {/* third state */}
        <div className=' '>
          <h1 className='font-medium text-secondaryLightColor text-2xl'>
            Third Stage (Approval)
          </h1>
          <p className='text-slate-500 text-sm'>
            This step usually takes about three to four weeks
          </p>
          <div className='mb-14'>
            <ul className='list-decimal ml-5'>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                After approval contribution is paid
              </li>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Passports are issued in 2-4 weeks
              </li>
            </ul>
          </div>
        </div>
        {/* third state */}
        <p className='text-slate-500 text-sm text-center mb-10'>
          The entire process usually takes between two to four months.
        </p>
      </article>
    </Layout>
  );
};

export default ProcessPage;
