import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
