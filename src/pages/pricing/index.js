import Layout from '@/components/layouts';
import React from 'react';

const PricingPage = () => {
  return (
    <Layout>
      <h3 className='tracking-wide py-4 lg:p-5 font-light text-mainLightColor uppercase'>
        PRICING PLANS AND COSTS{' '}
      </h3>
      <article className='max-w-lg mx-auto block'>
        {/* first state */}
        <div className='border-b-2 mb-20'>
          <h1 className='font-medium text-secondaryLightColor text-2xl'>
            Economic Diversification Fund (Donation){' '}
          </h1>
          <p className='text-slate-500 text-sm'>
            Minimum EDF Contribution Requirements{' '}
          </p>
          <div className='mb-16'>
            <ul className=''>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Single applicant USD 100,000{' '}
              </li>
              <li className='my-3 p-3 text-lg first-letter:uppercase '>
                Main applicant plus spouse USD 150,000{' '}
              </li>
              <li className='mb-3  p-3 text-lg first-letter:uppercase '>
                Family of three or four USD 175,000{' '}
              </li>
            </ul>
          </div>
        </div>
        {/* first state */}
        {/* second state */}
        <div className='border-b-2  mb-10'>
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
        </div>
        {/* second state */}

        <p className='text-slate-500 text-sm text-center mb-10 w-3/4 lg:w-full mx-auto'>
          Enhanced due diligence fees may sometimes be required, depending on
          the applicant’s current citizenship status, and other personal
          circumstances.{' '}
        </p>
      </article>
    </Layout>
  );
};

export default PricingPage;
