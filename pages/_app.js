import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import Reset from '../styles/Reset'
import Theme from '../styles/Theme'
import GlobalStyles from '../styles/GlobalStyles'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Curso Minha Casa Organizada - Leticia Martins</title>
      </Head>
      <Reset />
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
