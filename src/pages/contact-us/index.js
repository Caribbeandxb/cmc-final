import Layout from '@/components/layouts';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaWhatsapp ,FaPhone} from 'react-icons/fa';
const ContactUsPage = () => {
  const nameRef = useRef(null);
  const email = useRef(null);
  const msg = useRef(null);

  useEffect(() => {
    nameRef.current = '';
    email.current = '';
    msg.current = '';
  }, []);

  return (
    <Layout>
      <Head>
        <title>CMC | Contact Us</title>
        <meta
          property='og:title'
          content='cmc - contact us'
          key='caribbean management consultancies -  contact us'
        />
        <meta
          property='og:description'
          content='cmc contact us page - how to reach us'
          key='ogdesc'
        />
        <meta property='og:image' content='/images/logo-tr.png' key='ogimage' />
        <meta
          property='og:site_name'
          content='caribbean management consultancies - included our office address, whatsapp number and email plus our form to send us a messaged '
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
      <h1 className='text-center font-bold  capitalize text-xl text-secondaryLightColor'>
        contact us
      </h1>
      <form
        className='flex flex-col items-center justify-center w-full p-5 lg:max-w-2xl mx-auto'
        // sending form data to getForm.io
        action='https://getform.io/f/97aabbc9-1991-4816-86f2-c07a47196f80'
        method='POST'
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
        py-3 my-7 rounded-sm uppercase tracking-wider hover:bg-secondaryColor transition-colors duration-500 
        lg:w-1/2 mx-auto
        '
        >
          send message
        </button>
      </form>

      {/* more contact info */}
      <div className='text-center'>
        {/* direct email */}
        <div>
          <h5 className='text-3xl my-4 capitalize'>
            {/*  */}
            caribbean management consultancies
          </h5>
          <p className='text-lg'>
            {' '}
            Office 106, Al Salemiyah Tower, Deira, Dubai, UAE
              <span className='flex items-center justify-center my-5'>
              <FaPhone className='text-green-700'/>
              +971 43 43 4261
              </span>

          </p>
          <p className='my-3'>
            <a
              className='flex items-center justify-center w-fit mx-auto'
              href='mailto:info@Caribbeandxb.com'
              target='_blank'
            >
              <HiOutlineMail className='inline text-2xl text-red-600' />
              info@Caribbeandxb.com
            </a>
          </p>
          <p>
            <a
              className='flex items-center justify-center w-fit mx-auto'
              href='https://wa.me/+971522551154'
              target='_blank'
            >
              <FaWhatsapp className='inline text-2xl text-green-700' />
              +971 52 255 1154
            </a>{' '}
          </p>
        </div>
        {/* direct email */}
      </div>
      {/* more contact info */}
    </Layout>
  );
};

export default ContactUsPage;
