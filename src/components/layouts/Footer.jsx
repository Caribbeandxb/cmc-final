const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
  return (
    <footer className='text-center font-light my-2'>
      <p>
        COPYRIGHT &copy; {currentYear} JEFFERSON & YORK - ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
};

export default Footer;
