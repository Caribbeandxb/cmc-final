import Layout from '@/components/layouts';
import Head from 'next/head';
import React from 'react';

const ProcessPage = () => {
  return (
    <Layout>
      <Head>
        <title>CMC | Process</title>

        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />

        <link rel='canonical' href='https://www.caribbeandxb.com/process' />
        <meta name=' robots' content=' index, follow' />

        <meta
          name='description'
          content='caribbean management consultancies,a short description of what we do for you to get your new passport and how long does it take'
        />
        <meta
          name='google-site-verification'
          content='+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34='
        />

        <meta
          property='og:title'
          content='cmc - process'
          key='caribbean management consultancies - process page'
        />
        <meta
          property='og:description'
          content='cmc process page - get full information about dominica process'
          key='ogdesc'
        />
        <meta property='og:image' content='/images/logo_tr.png' key='ogimage' />
        <meta
          property='og:site_name'
          content='caribbean management consultancies - process'
          key='ogsitename'
        />
        <meta
          property='og:url'
          content='https://www.caribbeandxb.com/'
          key='ogurl'
        />
        <meta property='og:type' content='profile' key='ogtype' />
        <meta name='google' content='notranslate' key='notranslate' />
        <meta name='robots' content='all' />
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
                Initial payment
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
                Passports are issued in 2-4 months
              </li>
            </ul>
          </div>
        </div>
        {/* third state */}
        <p className='text-slate-500 text-sm text-center mb-10'>
          The entire process usually takes around six months.
        </p>
      </article>
    </Layout>
  );
};

export default ProcessPage;
