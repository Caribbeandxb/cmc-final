import Layout from '@/components/layouts';
import { countries } from '@/lib';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DominicaPassportPage = () => {
  return (
    <main className='overflow-x-hidden'>
      <Head>
        <title>CMC | Dominica Passport</title>
      </Head>
      {/* banner  */}
      <div className='w-screen'>
        <Image
          className='w-full h-40 lg:h-72 object-cover block m-0 p-0 '
          src='/images/dom-passport-bg.jpg'
          width={400}
          height={400}
          alt='dominica passport page header'
        />
      </div>
      {/* to avoid default css styles, use layout here */}
      <Layout>
        <div>
          <h1 className='ml-2 my-5 text-left tracking-widest text-lg text-secondaryColor'>
            "THE NATURE ISLE OF THE CARIBBEAN"
          </h1>
          <article
            className='flex flex-col items-center justify-center text-slate-600 
          lg:flex-row lg:items-start 
          '
          >
            <div className='lg:w-1/2'>
              <div className=' font-light'>
                <p className='text-base text-left'>
                  Dominica is a small and beautiful Caribbean island nation,
                  nestled between Martinique and Guadeloupe. Though most people
                  know about its glorious beaches and hot climate, there’s a lot
                  more to the country to be discovered. Dominica’s citizenship
                  by investment program was introduced in 1993 and is one of the
                  world’s longest-running economic citizenship schemes. Applying
                  for citizenship by investment in Dominica has become
                  increasingly popular in the last few years, and this should
                  come as no surprise. There are numerous benefits to dual
                  citizenship, with Dominica being a particularly appealing
                  place to hold a second passport. The country offers a wealth
                  of new opportunities and experiences, including:
                </p>
                <ul className='ml-7 list-disc text-base'>
                  <li>
                    {' '}
                    <span className='font-bold text-slate-700'>
                      Full residence status
                    </span>{' '}
                    — including working rights
                  </li>
                  <li>
                    Joining a global community that transcends Dominica’s land
                    borders
                  </li>
                  <li>
                    Global mobility, including{' '}
                    <span className='font-bold text-slate-700'>
                      visa-free travel to over 140
                    </span>
                    territories, from Singapore and Hong Kong to the European
                    Union and the United Kingdom
                  </li>
                  <li>
                    <span className='font-bold text-slate-700'>
                      No foreign income tax
                    </span>
                    , and no wealth, gift, inheritance, or capital gains tax
                  </li>
                  <li>The ability to hold multiple citizenships</li>
                  <li>
                    Knowing that you have personally contributed to the
                    prosperity of a peaceful, welcoming country, which you can
                    call home for life.
                  </li>
                </ul>

                <div className='my-3 text-sm font-normal text-slate-600'>
                  {countries.map((country) => (
                    <p key={country}>{country}</p>
                  ))}
                </div>
              </div>
            </div>
            {/* card */}
            <div
              className='max-h-fit min-h-fit max-w-full p-3 my-10 bg-mainLightColor
            lg:w-4/12 lg:mx-auto lg:max-h-full lg:my-0
            '
            >
              <div>
                <h4 className='py-3 uppercase text-secondaryColor tracking-wider'>
                  APPLY FOR YOUR SECOND CITIZENSHIP NOW
                </h4>
              </div>
              <div>
                <p className='text-slate-50'>
                  Dominica's passport is one the fastest and most affordable
                  citizenship by investment programs in the Caribbean region.
                  Starting at only USD100,000 & processing of less than four
                  months, Dominica is now of the most popular destinations for
                  second citizenship in the world.
                </p>
              </div>
              <button
                className='bg-mainColor tracking-wide my-3 py-4 px-12
               text-secondaryLightColor uppercase active:outline-none focus:outline-none '
              >
                <Link href={'/contact-us'}>apply today</Link>
              </button>
            </div>
            {/* card */}
          </article>
        </div>
      </Layout>
    </main>
  );
};

export default DominicaPassportPage;
