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
      <meta name="description" content="Your interactive virtual assistant" />
      <meta
        name="keywords"
        content="bot, virtual assistant, chatbot, machine learning"
      />

      <meta name="theme-color" content="#7665a0" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="apple-mobile-web-app-title" content="Bimpe" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <meta name="msapplication-navbutton-color" content="#7665a0" />
      <meta name="msapplication-TileColor" content="#7665a0" />
      <meta
        name="msapplication-TileImage"
        content="icon/apple-icon-144x144.png"
      />
      <meta name="msapplication-config" content="browserconfig.xml" />

      <meta name="Bimpe" content="Bimpe" />
      <meta name="msapplication-tooltip" content="Virtual Assistant" />
      <meta name="msapplication-starturl" content="/" />

      <meta name="msapplication-tap-highlight" content="no" />

      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />

      <meta name="nightmode" content="enable/disable" />

      <meta name="viewport" content="uc-fitscreen=yes" />

      <meta name="layoutmode" content="fitscreen/standard" />

      <meta name="imagemode" content="force" />

      <meta name="screen-orientation" content="portrait" />
      {/* <!-- Main Link Tags  --> */}
      <link
        href="/icon/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/icon/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link
        href="/icon/favicon-96x96.png"
        rel="icon"
        type="image/png"
        sizes="48x48"
      />

      {/* <!-- iOS  --> */}
      <link href="/icon/apple-icon-72x72.png" rel="apple-touch-icon" />
      <link
        href="/icon/apple-icon-76x76.png"
        rel="apple-touch-icon"
        sizes="76x76"
      />
      <link
        href="/icon/apple-icon-120x120.png"
        rel="apple-touch-icon"
        sizes="120x120"
      />
      <link
        href="/icon/apple-icon-152x152.png"
        rel="apple-touch-icon"
        sizes="152x152"
      />

      {/* <!-- Startup Image  --> */}
      {/* <link
        href="touch-icon-start-up-320x480.png"
        rel="apple-touch-startup-image"
      /> */}

      {/* <!-- Pinned Tab  --> */}
      <link
        href="/icon/favicon-32x32.png"
        rel="mask-icon"
        sizes="any"
        color="red"
      />

      {/* <!-- Android  --> */}
      <link href="android-icon-192x192.png" rel="icon" sizes="192x192" />
      <link href="apple-icon-120x120.png" rel="icon" sizes="128x128" />

      {/* <!-- UC Browser  --> */}
      <link
        href="/icon/apple-icon-57x57.png"
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
      />
      <link
        href="/icon/apple-icon-72x72"
        rel="apple-touch-icon"
        sizes="72x72"
      />

      {/* <!-- Manifest.json  --> */}
      <link href="/manifest.json" rel="manifest" />
    </Head>
  )
}
