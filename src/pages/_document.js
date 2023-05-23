import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <link
        rel='icon'
        type='image/png'
        href='/faveicons/tab-icon-32x32.png'
        sizes='32x32'
      />
      <link
        rel='icon'
        type='image/png'
        href='/faveicons/tab-icon-16x16.png'
        sizes='16x16'
      />

      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
