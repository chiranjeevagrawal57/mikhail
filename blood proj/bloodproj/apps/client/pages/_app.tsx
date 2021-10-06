import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to client!</title>
      </Head>
      <div className="app">
        <header className="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nx-logo-white.svg" alt="Nx logo" className="w-72 h-96"/>
          <h1>Welcome to client!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
