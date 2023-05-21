import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CommonQuestions = () => {
  return (
    <main className=''>
      <h3 className='text-mainLightColor text-2xl my-2 uppercase'>
        common questions
      </h3>
      <article className='flex items-center flex-col w-full lg:grid lg:grid-cols-3 lg:gap-4'>
        <div className='my-5 mx-5'>
          {/* why dominica */}
          <div className='w-full'>
            <Image
              className='block object-cover w-full'
              src='/images/why-dominica.webp'
              width={400}
              height={400}
              alt='why dominica'
            />
          </div>
          <div className='max-h-64  py-6 w-full bg-mainLightColor text-center'>
            <h4 className='my-4 font-bold text-xl'>Why Dominica?</h4>
            <p className='my-3 font-light w-1/2 mx-auto lg:w-full lg:mx-0 lg:px-1'>
              Visa free travel to UK, Schengen area & many more popular
              destinations. Dominica is Tax free & Business friendly.
            </p>
            <button className='bg-mainColor mb-10 px-6 py-3 rounded-md text-mainLightColor uppercase tracking-wider'>
              <Link href={'/'}>learn more</Link>
            </button>
          </div>
          {/* why dominica */}
        </div>

        {/* How Long */}
        <div className='my-5 mx-5'>
          <div className='w-full '>
            <Image
              className='block object-cover w-full'
              src='/images/how-long-does-it-take.webp'
              width={400}
              height={400}
              alt='why dominica'
            />
          </div>
          <div className='max-h-64 py-6 w-full bg-mainLightColor text-center'>
            <h4 className='my-4 font-bold text-xl'>How Long Does It Take?</h4>
            <p className='my-3 font-light w-1/2 mx-auto lg:w-full lg:mx-0 lg:px-1'>
              The whole process takes between 2 to 4 months from the time of
              application to receiving the passport.
            </p>
            <button className='bg-mainColor mb-10 px-6 py-3 rounded-md text-mainLightColor uppercase tracking-wider'>
              <Link href={'/'}>learn more</Link>
            </button>
          </div>
        </div>
        {/* How Long */}

        {/* why dominica */}
        <div className='my-5 mx-5'>
          <div className='w-full '>
            <Image
              className='block object-cover w-full'
              src='/images/gow-much-does-it-cost.webp'
              width={400}
              height={400}
              alt='why dominica'
            />
          </div>
          <div className='max-h-64 py-6 w-full bg-mainLightColor text-center'>
            <h4 className='my-4 font-bold text-xl'>How Much Does It Cost?</h4>
            <p className='my-3 font-light w-1/2 mx-auto lg:w-full lg:mx-0 lg:px-1'>
              The prices start from USD100,000, and family packages are the most
              affordable option compared to other second citizenship programs.
            </p>
            <button className='bg-mainColor mb-10 px-6 py-3 rounded-md text-mainLightColor uppercase tracking-wider'>
              <Link href={'/'}>learn more</Link>
            </button>
          </div>
        </div>
        {/* why dominica */}
      </article>
    </main>
  );
};

export default CommonQuestions;
