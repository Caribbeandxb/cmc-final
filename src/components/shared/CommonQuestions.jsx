import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CommonQuestions = () => {
  return (
    <main className='max-w-lg mx-auto lg:max-w-5xl'>
      <h3 className='text-mainLightColor text-2xl my-2 uppercase'>
        common questions
      </h3>
      <article className='flex items-center flex-col w-full lg:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4'>
        <div className='my-5 mx-5 '>
          {/* why dominica */}
          <div className='w-full lg:h-64'>
            <Image
              className='block object-cover w-full h-full'
              src='/images/DominicaPassport.jpg'
              width={400}
              height={400}
              alt='why dominica'
            />
          </div>
          <div className='max-h-fit lg:max-h-64  py-6 w-full bg-mainLightColor text-center'>
            <h4 className='my-4 font-bold text-xl'>Why Dominica?</h4>
            <p className='my-1 text-sm text-secondaryLightColor  font-light w-1/2 mx-auto lg:w-full lg:mx-0 lg:px-1'>
              Visa free travel to UK, Schengen area & many more popular
              destinations. Dominica is Tax free & Business friendly.
            </p>
            <Link
              className='block w-1/2 mx-auto lg:w-3/4 bg-mainColor my-7 px-6 py-3 rounded-md text-mainLightColor uppercase tracking-wider'
              href={'/dominica-passport'}
            >
              learn more
            </Link>
          </div>
          {/* why dominica */}
        </div>

        {/* How Long */}
        <div className='my-5 mx-5  '>
          <div className='w-full lg:h-64 lg:max-h-64'>
            <Image
              className='block object-cover w-full h-full'
              src='/images/HowLongDoesItTake.jpg'
              width={400}
              height={400}
              alt='why dominica'
            />
          </div>
          <div className='max-h-fit lg:max-h-64 py-6 w-full bg-mainLightColor text-center'>
            <h4 className='my-4 font-bold text-xl'>How Long Does It Take?</h4>
            <p className='my-1 text-sm text-secondaryLightColor  font-light w-1/2 mx-auto lg:w-full lg:mx-0 lg:px-1'>
              The whole process takes between 2 to 4 months from the time of
              application to receiving the passport.
            </p>
            <Link
              className='block w-1/2 mx-auto lg:w-3/4 bg-mainColor my-7 px-6 py-3 rounded-md text-mainLightColor uppercase tracking-wider'
              href={'/process'}
            >
              learn more
            </Link>
          </div>
        </div>
        {/* How Long */}

        {/* how much does it take */}
        <div className='my-5 mx-5 '>
          <div className='w-full lg:h-64 '>
            <Image
              className='block object-cover w-full h-full'
              src='/images/HowMuchDoesItCost.jpg'
              width={400}
              height={400}
              alt='why dominica'
            />
          </div>
          <div className='max-h-fit lg:max-h-64 py-6 w-full bg-mainLightColor text-center'>
            <h4 className='my-4 font-bold text-xl'>How Much Does It Cost?</h4>
            <p className='my-1 text-sm text-secondaryLightColor  font-light w-1/2 mx-auto lg:w-full lg:mx-0 lg:px-1'>
              The prices start from USD100,000, and family packages are the most
              affordable option compared to other second citizenship programs.
            </p>
            <Link
              className='bg-mainColor block w-1/2 lg:w-3/4 mx-auto my-7 px-6 py-3 rounded-md text-mainLightColor uppercase tracking-wider'
              href={'/pricing'}
            >
              learn more
            </Link>
          </div>
        </div>
        {/* how much does it take */}
      </article>
    </main>
  );
};

export default CommonQuestions;
