import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useRouter } from 'next/router';
const Navbar = () => {
  const navItems = [
    'home',
    'dominica passport',
    'process',
    'pricing',
    'contact us',
  ];
  const router = useRouter();
  const currentPath = router.pathname;
  console.log(currentPath);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex justify-between flex-row-reverse h-10  my-10 mx-10 lg:max-w-full  lg:block lg:mt-20 lg:mx-20 lg:h-10'>
      <div className='block flex-1 text-center h-fit w-full'>
        <div>
          <Link href={'/'}>LOGO</Link>
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
        } top-0 left-0 bg-secondaryColor h-screen overflow-hidden w-full
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
          className='flex flex-col ml-4 mt-10 text-secondaryLightColor h-10 
         lg:m-0 lg:p-0  lg:flex lg:flex-row lg:items-center lg:bg-none lg:w-full lg:max-w-2xl lg:mx-auto lg:text-center'
        >
          {/* rendering navItems */}
          {navItems.map((item) => {
            return (
              <li
                key={item}
                className={`${
                  item === currentPath ? 'border-b-2' : ''
                } my-4 lg:mx-auto hover:text-mainLightColor   `}
              >
                {/* checking for home keyword to set it to default */}
                <Link
                  className='text-2xl  capitalize  active:font-bold w-full  lg:font-semibold lg:text-xl '
                  href={`/${item.toLowerCase() === 'home' ? '' : item}`}
                >
                  {item}
                </Link>{' '}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
