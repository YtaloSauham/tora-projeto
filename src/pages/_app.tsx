import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { url } from 'inspector'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
