import Link from 'next/link';

const DomPassCard = ({ title, txt, btnTxt }) => {
  return (
    <>
      {/* card */}
      <div
        className='max-h-fit max-w-3/4 w-3/4 p-3 my-10 bg-mainLightColor
            lg:w-4/12 lg:mx-auto lg:max-h-full lg:my-0
            '
      >
        <div>
          <h4 className='py-3 uppercase text-right text-secondaryLightColor font-bold lg:text-xl tracking-wider'>
            {title}
          </h4>
        </div>
        <div className='px-2 md:px-6 lg:px-5'>
          <p className='text-slate-50 text-right'>{txt}</p>
          <Link
            className='bg-mainColor py-2 px-4 lg:w-full my-3 lg:py-4 lg:px-12 text-center block tracking-wide 
          text-mainLightColor text-sm uppercase active:outline-none focus:outline-none '
            href={'/contact-us'}
          >
            {btnTxt}
          </Link>
        </div>
      </div>
      {/* card */}
    </>
  );
};

export default DomPassCard;
