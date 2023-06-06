import { countries } from '@/lib';
const Countries = ({ rtl = 'left' }) => {
  // render all countries for dominica-passport
  return (
    <>
      <ul className={`my-3 w-full text-sm grid grid-cols-2 text-${rtl} list-decimal font-normal text-slate-600`}>
        {countries.map((country,idx) => (
          <li className={`w-fit mx-6 my-2`} key={country}>
            {country}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Countries;
