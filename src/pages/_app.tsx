import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'



export default function App({ Component, pageProps }: AppProps) {

  useEffect(() =>{
    Aos.init({duration:1500});
  },[])


  return <>
  <Head>
  
<link rel='stylesheet' href='nprogress.css'/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"></link>
  
  </Head>
    <Component {...pageProps} />
  </>
}
