import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (<div className="min-h-screen min-w-screen mx-4 sm:mx-8 md:mx-16 text-white" >
    <Head>
      <meta charSet="utf-8" />

      <title>Marek Vospěl</title>
      <meta
        name="description"
        content="Hey, my name is Marek Vospěl and I'm a front-end developer & Cyber Security student from Czech Republic" />
      <meta
        name="keywords"
        content="Marek Vospěl, Czech Republic, front-end, Svelte, SvelteKit, Vue, development, Linux" />
      <meta name="author" content="Marek Vospěl" />
      <meta name="google" content="notranslate nositelinksearchbox" />
      <meta name="theme-color" content="#19b4d1" />

      <meta property="og:title" content="Marek Vospěl" />
      <meta
        property="og:description"
        content="Hey, my name is Marek Vospěl and I'm a front-end developer & Cyber Security student from Czech Republic" />
      <meta property="og:url" content="https://vospel.cz/" />

      <meta name="twitter:title" content="Marek Vospěl" />
      <meta
        name="twitter:description"
        content="Hey, my name is Marek Vospěl and I'm a front-end developer & Cyber Security student from Czech Republic" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Component {...pageProps} />
  </div>)
}

export default MyApp
