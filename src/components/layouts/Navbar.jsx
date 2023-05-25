import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useRouter } from 'next/router';
import Image from 'next/image';
const Navbar = () => {
  // navItems that are shown in navbar
  const navItems = [
    'home',
    'dominica passport',
    'process',
    'pricing',
    'contact us',
  ];
  // getting current path
  const router = useRouter();
  const currentPath = router.pathname;

  const [isOpen, setIsOpen] = useState(false);

  // closing navbar on small sizes when url changes
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  return (
    <header className='flex justify-between items-center flex-row-reverse h-10 my-10 mx-10 lg:max-w-full  lg:block lg:mt-7 lg:mb-36  '>
      <div className='block flex-1 text-center h-fit w-full'>
        <div className='max-w-sm max-h-28 lg:max-w-lg my-0 p-0 mx-auto'>
          <Link className='block m-0 p-0' href={'/'}>
            <Image
              className='block object-cover p-0 w-1/2 lg:w-3/4 lg:max-h-24  mx-auto'
              src='/images/logo-tr.png'
              width={425}
              height={450}
              alt='cmc logo'
            />
          </Link>
        </div>
      </div>
      {/* open btn */}
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <HiMenu className='cursor-pointer text-2xl lg:hidden' />
      </div>
      {/* open btn */}
      <nav
        className={`${
          isOpen ? 'absolute' : 'hidden'
        } top-0 left-0 bg-secondaryColor h-full overflow-hidden w-full
         lg:w-1/2 lg:mx-auto lg:block lg:bg-white  `}
      >
        {/* close btn */}
        <div
          className='absolute right-10 top-5 lg:hidden'
          onClick={() => setIsOpen(false)}
        >
          <HiX className='cursor-pointer text-4xl bg-secondaryLightColor  ' />
        </div>
        {/* close btn */}
        <ul
          className='flex flex-col ml-4 mt-10 text-secondaryLightColor h-10 z-50
         lg:m-0 lg:p-0  lg:flex lg:flex-row lg:items-center lg:bg-none lg:w-full lg:max-w-2xl lg:mx-auto lg:text-center'
        >
          {/* rendering navItems */}
          {navItems.map((item) => {
            // joining navItems that are two or more words with ('-')
            // to simplify the routing part in pages/
            const joinedItem = item.replace(' ', '-');
            return (
              <li
                key={item}
                className={`${
                  item === currentPath ? 'border-b-2' : ''
                } my-4 lg:mx-auto hover:text-mainLightColor  active:outline-none focus:outline-none`}
              >
                {/* checking for home keyword to set it to default */}
                <Link
                  className='text-2xl  capitalize  active:font-bold w-full  lg:font-semibold lg:text-xl'
                  // checking to see if current navItem is HOME and
                  // if it is than don't add anything else add the navItem
                  href={`/${
                    joinedItem.toLowerCase() === 'home'
                      ? ''
                      : joinedItem.toLowerCase()
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
