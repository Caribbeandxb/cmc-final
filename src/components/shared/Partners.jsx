import Image from 'next/image';
const Partners = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold tracking-wide'>
        Partners of Dominica's Housing Program Financed By CBI
      </h1>
      <article className='w-full flex justify-around items-center'>
        <div>
          <Image
            src='/images/partners-logo/dom.webp'
            width={100}
            height={100}
            alt='partners'
          />
        </div>
        <div>
          <Image
            src='/images/partners-logo/dom-2.webp'
            width={100}
            height={100}
            alt='partners'
          />
        </div>
        <div>
          <Image
            src='/images/partners-logo/nh.webp'
            width={100}
            height={100}
            alt='partners'
          />
        </div>
        <div>
          <Image
            src='/images/partners-logo/gl.webp'
            width={100}
            height={100}
            alt='partners'
          />
        </div>
        <div>
          <Image
            src='/images/partners-logo/bn.webp'
            width={100}
            height={100}
            alt='partners'
          />
        </div>
      </article>
    </div>
  );
};

export default Partners;
