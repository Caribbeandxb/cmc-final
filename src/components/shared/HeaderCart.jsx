import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
const HeaderCart = () => {
  return (
    <>
      <main className='h-screen lg:h-full m-0 p-0 w-full md:max-h-96 md:max-w-4xl md:mx-auto'>
        {/* Cart header start */}
        <article className='w-full h-48 md:max-w-6xl md:mx-auto md:max-h-full md:h-full md:flex'>
          {/* cart Image */}
          <div className='block w-full m-0  md:m-0'>
            <Image
              className='w-full object-cover md:h-full md:w-full md:m-0'
              src={'/images/header.webp'}
              alt='header'
              width={500}
              height={500}
            />
          </div>
          {/* cart Image */}
          {/* cart Info */}
          <div className='w-full mx-auto bg-mainLightColor md:w-1/2 md:flex md:items-center'>
            <div className='w-10/12 mx-auto flex flex-col items-center justify-center'>
              <h3 className='text-secondaryLightColor mt-7 md:mt-2'>
                WELCOME TO YOUR FUTURE
              </h3>
              <div className='text-center my-5 md:my-1'>
                <p className='font-light tracking-wide text-3xl lg:text-3xl lg:font-bold text-mainColor'>
                  Freedom{' '}
                </p>
                <p className='font-light tracking-wide text-3xl lg:text-3xl lg:font-bold text-mainColor'>
                  Security{' '}
                </p>
                <p className='font-light tracking-wide text-3xl lg:text-3xl lg:font-bold text-mainColor'>
                  Happiness
                </p>
                <p className='my-2 text-secondaryLightColor'>
                  Second Citizenship Is The Gateway To Endless Opportunities
                </p>
              </div>
              <div className='mb-5 bg-secondaryColor rounded-md'>
                <button className='px-2 py-1 uppercase text-secondaryLightColor'>
                  <Link href={'/'}>get a free quote</Link>
                </button>
              </div>
            </div>
          </div>
          {/* cart Info */}
        </article>
        {/* Cart header end */}
      </main>
    </>
  );
};

export default HeaderCart;