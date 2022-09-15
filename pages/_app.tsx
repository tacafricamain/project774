import '../styles/Preloader.css'
import '../styles/Optin.css'
import '../styles/Timer.css'
import '../styles/globals.css'
import "../styles/style.css";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
