import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="author" content="Junior Alves" />
          <meta name="copyright" content="Junior Alves" />
          <meta name="description"
            content=" Curso de organização residêncial Minha casa Organizada. Aprenda a organizar a sua casa de forma facil e totalmente prática. A personal organizer Leticia Martins te ensinará todas as técnicas que você precisa para deixar sua casa linda e organizada." />
          <meta name="keywords"
            content="Curso, organização, personal-organizer, curso-personal-organizer, organizadores, Minha casa organizada" />
          <meta name="robots" content="all" />
          <meta name="robots" content="index, follow" />

          <title>Curso Minha Casa Organizada - Leticia Martins</title>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
