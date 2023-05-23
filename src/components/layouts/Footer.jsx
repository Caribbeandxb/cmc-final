const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
  return (
    <footer className='text-center font-light mt-9 mb-3'>
      <p>
        COPYRIGHT &copy; {currentYear} Caribbean Management Consultancies - ALL
        RIGHTS RESERVED.
      </p>
      {/* add developer name and information */}
    </footer>
  );
};

export default Footer;
