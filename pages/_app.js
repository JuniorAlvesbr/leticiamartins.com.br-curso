import { ThemeProvider } from 'styled-components'
import Reset from '../styles/Reset'
import GlobalStyles from '../styles/GlobalStyles'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Reset />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
