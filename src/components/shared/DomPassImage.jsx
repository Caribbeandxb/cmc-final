import Image from 'next/image';
Image;
const DomPassImage = ({title}) => {
  return (
    <div>
      {/* banner  */}
      <div className='w-screen relative -z-50'>
        <Image
          className='w-full h-40 lg:h-72 object-cover block m-0 p-0 '
          src='/images/HowMuchDoesItCost.jpg'
          width={900}
          height={900}
          alt='dominica passport page header'
        />
        <p className='absolute text-center text-white text-2xl lg:text-3xl capitalize top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {title}
        </p>
      </div>
    </div>
  );
};

export default DomPassImage;
