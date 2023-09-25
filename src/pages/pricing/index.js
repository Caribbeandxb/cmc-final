import Layout from '@/components/layouts';
import Head from 'next/head';
import React from 'react';

const PricingPage = () => {
  return (
    <Layout>
      <Head>
        <title>CMC | Pricing</title>
        <meta
          property='og:title'
          content='cmc - pricing'
          key='caribbean management consultancies - pricing page'
        />
        <meta
          property='og:description'
          content="cmc pricing page - how much does it costs to get dominica's passport?"
          key='ogdesc'
        />
        <meta property='og:image' content='/images/logo_tr.png' key='ogimage' />
        <meta
          property='og:site_name'
          content='caribbean management consultancies - pricing'
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
        PRICING PLANS AND COSTS{' '}
      </h3>
      <article className='max-w-lg mx-auto block h-full'>
        {/* first state */}
        <div className='border-b-2 mb-5 h-full'>
          <h1 className='font-medium text-secondaryLightColor text-2xl'>
            Economic Diversification Fund (Donation){' '}
          </h1>
          <p className='text-slate-500 text-sm'>
            Minimum EDF Contribution Requirements{' '}
          </p>
          <div className='mb-16'>
            <ul className=''>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Single applicant USD 115,000{' '}
              </li>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Main applicant plus spouse USD 135,000{' '}
              </li>
              <li className='mb-3  p-3 text-lg first-letter:uppercase '>
                Family of three or four (kids under 16) USD 135,000{' '}
              </li>
            </ul>
          </div>
        </div>
        {/* first state */}
        {/* second state */}
        {/* <div className='border-b-2  mb-10'>
          <h1 className='font-medium text-secondaryLightColor text-2xl'>
            Additional EDF Fees{' '}
          </h1>
          <p className='text-slate-500 text-sm'>
            The following fees must be paid in addition to the minimum EDF
            contribution{' '}
          </p>
          <div className='mb-16'>
            <ul className=''>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Applicant due diligence fee USD 7,500{' '}
              </li>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Spouse due diligence fee USD 4,000
              </li>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Dependent due diligence fee USD 4,000
              </li>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Application Processing Fee USD 1,000
              </li>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Certificate of Naturalization fee USD 250
              </li>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Legal Fees USD 5,000
              </li>
            </ul>
          </div>
        </div> */}
        {/* second state */}

      </article>
        <p className='text-slate-500 text-sm text-center w-3/4 md:w-6/12 mx-auto'>
          Enhanced due diligence fees may sometimes be required, depending on
          the applicant’s current citizenship status, and other personal
          circumstances.{' '}
        </p>
    </Layout>
  );
};

export default PricingPage;
