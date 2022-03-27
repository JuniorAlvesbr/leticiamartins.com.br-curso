import { ThemeProvider } from 'styled-components'
import Reset from '../styles/Reset'
import Theme from '../styles/Theme'
import GlobalStyles from '../styles/GlobalStyles'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Reset />
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
