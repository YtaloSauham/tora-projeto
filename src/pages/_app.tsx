import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'






export default function App({ Component, pageProps }: AppProps) {


  useEffect(() =>{
    Aos.init({duration:1500});
  }, [])


  return <>
  
    <Component {...pageProps} />
  </>
}
