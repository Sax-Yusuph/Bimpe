import Head from 'next/head'

export default function Meta(): JSX.Element {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Interactive Virtual assistant" />
      <meta
        name="keywords"
        content="bot, interactive, virtual assistant, chatbot"
      />
      <title>Bimpe - interactive virtual assistant</title>

      <link rel="manifest" href="/manifest.json" />
      <link
        href="/icon/bimpe32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link
        href="/icon/bimpe32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/bimpeIcon.png"></link>
      <meta name="theme-color" content="#604580" />
      {/* <style>
        *{
         ' scrollbar-color': 'rgba(0,0,0,.2)';
          'scrollbar-width': 'thin'
        }
      </style> */}
    </Head>
  )
}
