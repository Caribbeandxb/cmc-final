import Layout from '@/components/layouts';
import Countries from '@/components/shared/Countries';
import DomPassCard from '@/components/shared/DomPassCard';
import DomPassImage from '@/components/shared/DomPassImage';
import Head from 'next/head';
import Link from 'next/link';

const ChDominicaPassport = () => {
  return (
    <main className='overflow-x-hidden'>
      <Head>
        <title>CMC | 多米尼克护照</title>
        <meta
          property='og:title'
          content='cmc - 多米尼克护照'
          key='caribbean management consultancies - dominica passport page / chinese'
        />
        <meta
          property='og:description'
          content="cmc 多米尼克护照 page - every thing you should know about dominica's passport / chinese"
          key='ogdesc'
        />
        <meta property='og:image' content='/images/logo_tr.png' key='ogimage' />
        <meta
          property='og:site_name'
          content='caribbean management consultancies - dominica passport page full information in chinese'
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
      <DomPassImage title='多米尼克联邦信息和公民福利' />
      {/* to avoid default css styles, use layout here */}
      <Layout>
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
            href={'/dominica-passport/fa'}
          >
            farsi
          </Link>
        </div>
        <div>
          <h1 className='ml-2 my-5 text-left tracking-widest text-lg text-secondaryColor'>
            "加勒比海的自然之岛"
          </h1>
          <article
            className='flex flex-col items-center justify-center text-slate-600 
          lg:flex-row lg:items-start 
          '
          >
            <div className='lg:w-1/2'>
              <div className=' font-light'>
                <p className='text-base text-left'>
                  多米尼克是一个美丽的加勒比海小岛国，位于马提尼克岛和瓜德罗普岛之间。
                  虽然大多数人都知道它美丽的海滩和炎热的气候，但这个国家还有更多值得探索的地方。
                  多米尼克的投资入籍计划于 1993
                  年推出，是世界上运行时间最长的经济入籍计划之一。
                  在过去几年中，通过在多米尼克投资申请公民身份越来越受欢迎，这不足为奇。
                  双重国籍有很多好处，多米尼克是持有第二本护照的特别有吸引力的地方。
                  这个国家提供了大量新的机会和经验{' '}
                </p>

                {/* countries */}
                <Countries />
              </div>
            </div>

            {/* card */}
            <DomPassCard
              title='立即申请您的第二公民身份！'
              txt='多米尼克的护照是加勒比地区最快、最实惠的投资入籍项目之一。多米尼克现已成为世界上第二公民身份最受欢迎的目的地之一。'
              btnTxt='今天申请'
              rtl='left'
            />
            {/* card */}
          </article>
        </div>
      </Layout>
    </main>
  );
};

export default ChDominicaPassport;
