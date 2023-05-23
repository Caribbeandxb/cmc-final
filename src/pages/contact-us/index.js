import Layout from '@/components/layouts';
import Head from 'next/head';
import React from 'react';

const ContactUsPage = () => {
  return (
    <Layout>
      <Head>
        <title>CMC | Contact Us</title>
      </Head>
      <h1 className='text-center capitalize text-lg text-secondaryLightColor'>
        contact us
      </h1>
      <form
        className='flex flex-col items-center justify-center w-full p-5 lg:max-w-2xl mx-auto'
        action='#'
      >
        {/* name */}
        <div className='flex flex-col w-full'>
          <label className='capitalize' htmlFor='name'>
            name
          </label>
          <input
            className='border-b-2 focus:outline-none focus:border-mainLightColor'
            type='text'
            name='name'
            max={100}
            min={1}
            required
          />
        </div>
        {/* name */}

        {/* email */}
        <div className='flex flex-col w-full'>
          <label className='capitalize' htmlFor='email'>
            email
          </label>
          <input
            className='border-b-2 focus:outline-none focus:border-mainLightColor'
            type='email'
            name='email'
            max={100}
            min={1}
            required
          />
        </div>
        {/* email */}

        {/* text */}
        <div className='flex flex-col w-full '>
          <label className='capitalize' htmlFor='message'>
            text
          </label>
          <input
            className='border-b-2 focus:outline-none focus:border-mainLightColor'
            type='text'
            name='message'
            maxLength={1000}
            minLength={12}
            required
          />
        </div>
        {/* text */}

        <button
          className='bg-mainColor text-secondaryLightColor w-full
        py-3 my-7 rounded-sm uppercase tracking-wider hover:bg-Matisse 
        lg:w-1/2 mx-auto
        '
        >
          send message
        </button>
      </form>

      {/* more contact info */}
      <div className='text-center'>
        {/* whatsapp */}
        <div>whatsapp</div>
        {/* whatsapp */}

        {/* direct email */}
        <div>
          <h5 className='text-xl my-4 capitalize'>
            caribbean management consultancies
          </h5>
          <p>Office 408, Sultan Business Centre, Oud Metha, Dubai, UAE</p>
          <p>
            Email:{' '}
            <a href='/' target='_blank'>
              info@jeffersonandyork.com
            </a>
          </p>
          <p>
            Phone Number: <a href=''>+971 4 3532424</a>{' '}
          </p>
        </div>
        {/* direct email */}
      </div>
      {/* more contact info */}
    </Layout>
  );
};

export default ContactUsPage;
