import Layout from '@/components/layouts';
import Countries from '@/components/shared/Countries';
import DomPassCard from '@/components/shared/DomPassCard';
import DomPassImage from '@/components/shared/DomPassImage';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const DominicaPassportPage = () => {
  return (
    <main className='overflow-x-hidden'>
      <Head>
        <title>CMC | Dominica Passport</title>

        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />

        <link
          rel='canonical'
          href='https://www.caribbeandxb.com/dominica-passport'
        />
        <meta name=' robots' content=' index, follow' />

        <meta
          name='description'
          content="caribbean management consultancies, what does dominica's passport worth, and how to get it. a general information has given to you to get to know more about dominica's passport"
        />
        <meta
          name='google-site-verification'
          content='+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34='
        />

        <meta
          property='og:title'
          content='cmc - dominica passport'
          key='caribbean management consultancies - dominica passport page'
        />
        <meta
          property='og:description'
          content="cmc dominica passport page - every thing you should know about dominica's passport"
          key='ogdesc'
        />
        <meta property='og:image' content='/images/logo_tr.png' key='ogimage' />
        <meta
          property='og:site_name'
          content='caribbean management consultancies - dominica passport page full information'
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
      {/* banner  */}
      <DomPassImage title='Commonwealth of Dominica Information & Citizenship Benefits' />
      {/* to avoid default css styles, use layout here */}
      <Layout>
        <div className='flex items-center justify-around'>
          <Link
            className='block capitalize font-bold cursor-pointer tracking-wider text-secondaryColor transition duration-300 hover:text-mainColor '
            href={'/dominica-passport/fa'}
          >
            farsi
          </Link>
          <span>/</span>
          <Link
            className='block capitalize font-bold cursor-pointer tracking-wider text-secondaryColor transition duration-300 hover:text-mainColor '
            href={'/dominica-passport/ch'}
          >
            chines
          </Link>
        </div>
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
                {/* countries */}
                <Countries />
              </div>
            </div>

            {/* card */}
            <DomPassCard
              title='APPLY FOR YOUR SECOND CITIZENSHIP NOW'
              txt=" Dominica's passport is one the fastest and most affordable
                  citizenship by investment programs in the Caribbean region.
                    processing of less than four
                  months, Dominica is now of the most popular destinations for
                  second citizenship in the world."
              btnTxt='apply today'
              rtl='left'
            />

            {/* card */}
          </article>
        </div>
      </Layout>
    </main>
  );
};

export default DominicaPassportPage;
