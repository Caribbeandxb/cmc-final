import { countries } from '@/lib';
const Countries = () => {
  // render all countries for dominica-passport
  return (
    <>
      <ul className='my-3 text-sm font-normal text-slate-600'>
        {countries.map((country) => (
          <li className='ml-6' key={country}>
            {country}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Countries;
