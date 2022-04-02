import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Raleway:wght@300;400;600;700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
  
}