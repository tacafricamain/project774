import '../styles/globals.css'
import '../styles/markdown.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/NavBar/NavBar'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
    )
}

export default MyApp
