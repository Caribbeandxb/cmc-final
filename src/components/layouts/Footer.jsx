const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
  return (
    <footer className='text-center font-light mt-9 mb-3'>
      <p className='text-base px-3'>
        COPYRIGHT &copy; {currentYear} Caribbean Management Consultancies - ALL
        RIGHTS RESERVED.
      </p>
      {/* add developer name and information */}
      <span className='capitalize font-light text-xs text-secondaryColor hover:text-mainLightColor transition-colors duration-300'><a href="mailto:pmosadeqzadeh@gmail.com">developed by parham</a></span>
    </footer>
  );
};

export default Footer;
