import Layout from '@/components/layouts';
import Countries from '@/components/shared/Countries';
import DomPassCard from '@/components/shared/DomPassCard';
import DomPassImage from '@/components/shared/DomPassImage';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const FaDominicaPassport = () => {
  return (
    <main className='overflow-x-hidden'>
      <Head>
        <title>CMC | پاسپورت دومنیکا</title>
        <meta
          property='og:title'
          content='cmc - پاسپورت دومنیکا '
          key='caribbean management consultancies - dominica passport page / farsi'
        />
        <meta
          property='og:description'
          content="cmc process page - every thing you should know about dominica's passport / farsi"
          key='ogdesc'
        />
        <meta property='og:image' content='/images/logo-tr.png' key='ogimage' />
        <meta
          property='og:site_name'
          content='caribbean management consultancies - dominica passport page full information in farsi'
          key='ogsitename'
        />
        <meta
          property='og:url'
          content='https://www.caribbeandxb.com/'
          key='ogurl'
        />
        <meta property='og:type' content='profile' key='ogtype' />
        <meta name='google' content='notranslate' key='notranslate' />
        <meta name='robots' content='all' />
      </Head>
      {/* banner  */}

      <DomPassImage title='مزایای شهروندی مشترک المنافع دومنیکا' />
      {/* to avoid default css styles, use layout here */}
      <Layout>
        {/* language link */}
        <div className='flex items-center justify-around'>
          <Link
            className='block capitalize font-bold cursor-pointer tracking-wider text-secondaryColor transition duration-300 hover:text-mainColor '
            href={'/dominica-passport'}
          >
            eng
          </Link>
          <span>/</span>
          <Link
            className='block capitalize font-bold cursor-pointer tracking-wider text-secondaryColor transition duration-300 hover:text-mainColor '
            href={'/dominica-passport/ch'}
          >
            chines
          </Link>
        </div>
        {/* language link */}
        <div>
          <h1 className='ml-2 my-5 text-right lg:text-center tracking-widest text-lg text-secondaryColor'>
            "جزیره طبیعت کارائیب"
          </h1>
          <article
            className='flex flex-col items-center justify-center text-slate-600 
          lg:flex-row lg:items-start 
          '
          >
            <div className='lg:w-1/2'>
              <div className=' font-light'>
                <p className='text-base text-right'>
                  "جزیره طبیعی کارائیب" دومینیکا یک کشور جزیره ای کوچک و زیبا در
                  دریای کارائیب است که بین مارتینیک و گوادلوپ قرار گرفته است.
                  اگرچه بیشتر مردم سواحل باشکوه و آب و هوای گرم آن را می دانند،
                  اما چیزهای بیشتری برای کشف کردن این کشور وجود دارد. برنامه
                  شهروندی دومینیکا از طریق سرمایه گذاری در سال 1993 معرفی شد و
                  یکی از طولانی ترین طرح های شهروندی اقتصادی در جهان است.
                  درخواست شهروندی از طریق سرمایه گذاری در دومینیکا در چند سال
                  اخیر به طور فزاینده ای محبوب شده است و این نباید تعجب آور
                  باشد. تابعیت مضاعف مزایای متعددی دارد که دومینیکا مکانی جذاب
                  برای داشتن پاسپورت دوم است. این کشور انبوهی از فرصت ها و
                  تجربیات جدید را ارائه می دهد، از جمله: وضعیت اقامت کامل - از
                  جمله حقوق کار پیوستن به جامعه جهانی که از مرزهای زمینی
                  دومینیکا فراتر می رود تحرک جهانی، از جمله سفر بدون ویزا به بیش
                  از 140 منطقه، از سنگاپور و هنگ کنگ گرفته تا اتحادیه اروپا و
                  بریتانیا بدون مالیات بر درآمد خارجی، و بدون مالیات بر ثروت،
                  هدیه، ارث یا عایدی سرمایه توانایی داشتن چندین تابعیت با دانستن
                  اینکه شما شخصاً به شکوفایی کشوری صلح‌آمیز و خوش‌آمد، که
                  می‌توانید آن را خانه برای زندگی بنامید، کمک کرده‌اید.
                </p>
                <p className='text-right font-bold '>
                  :با پاسپورت دومنیکا میتوانید به کشورهای زیر بدون ویزا سفر کنید
                </p>
                {/* countries */}
                <Countries />
              </div>
              {/* card */}
            </div>
            <DomPassCard
              title='اکنون برای تابعیت دوم خود اقدام کنید'
              txt='پاسپورت دومینیکا یکی از سریع ترین و مقرون به صرفه ترین شهروندی توسط
            برنامه های سرمایه گذاری در منطقه کارائیب است. دومینیکا با شروع تنها
            115000 دلار و پردازش کمتر از چهار ماه، اکنون یکی از محبوب ترین مقاصد
            برای شهروندی دوم در جهان است.'
              btnTxt='امروز اقدام کنید'
            />
          </article>
        </div>
      </Layout>
    </main>
  );
};

export default FaDominicaPassport;
