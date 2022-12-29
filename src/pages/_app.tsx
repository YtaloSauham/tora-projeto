import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { url } from 'inspector'
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
  
<link rel='stylesheet' href='nprogress.css'/>
  
  </Head>
    <Component {...pageProps} />
  </>
}
