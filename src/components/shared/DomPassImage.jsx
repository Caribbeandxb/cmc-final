import Image from 'next/image';
Image;
const DomPassImage = ({ title }) => {
  return (
    <div>
      {/* banner  */}
      <div className='w-screen relative -z-50'>
        <Image
          className='w-full h-40 lg:h-72 object-cover block m-0 p-0 '
          src='/images/dom-pass-bg-min.jpg'
          width={1000}
          height={1000}
          alt='dominica passport page header'
          priority={true}
          quality={100}
          blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAByAKsDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAQACAwT/xAAZEAEBAQEBAQAAAAAAAAAAAAAAARECEiH/xAAZAQEBAQEBAQAAAAAAAAAAAAABAAIDBAX/xAAaEQEBAQEBAQEAAAAAAAAAAAAAEQESAgMT/9oADAMBAAIRAxEAPwD1op9F80AoFkVoVKMVmt2M2FRzrn1HaxixvNc98uFDfXLF+N5rhuQJIpJJIlkgEqS1qcirndZTfk+RWuNe8NJxr2RlYVipjOCxvBgpjFjNjpYLDVHKxmx1sYsNHLlY53l3sYsaz0zvhwvDPmu9gsPTnvyccpnNdMWLofkxOW5y1IZBvpvPlgkawyHGOm88DFjWLB0eHrRTNaiSKpgwY0sFMYwWN4LFTHOxmx0sZsVMcrGbHWxiw0RzsGN2DF0uWMWNYsXR5GGQ4cZ6PIkOHDg6PIxE4Ojy9JBacEQVWkkRSzgxsClixmx0sZsVLnYzY6WM2KpzsZx0sZsFLGLGsWClnDhw4K0MOHDjNIxY1ixUuyBdnipLJBrSBDVSSRorNaFBrFZsboqVc7BjdGBVjFjWLAazhw4cZaow4cOBqs4cOHEqtTOnXoeDppqMSmBqtlmEGlAg0CkJdCs1qipdM0NBLplYUIelhxERrPSxYSzGugsKUPTlp1gvQ8FblMZhgazW4WYQ1WkEDSEkKAQhQEkKkkjmkghvNKRZazUkka85iTs8hjUSDWNQpBopIFJJIVlIshJIJJA4SkG8JSDWJJJp/9k='
          placeholder='blur'
        />
        <p className='absolute text-center text-white text-2xl lg:text-3xl capitalize top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {title}
        </p>
      </div>
    </div>
  );
};

export default DomPassImage;
