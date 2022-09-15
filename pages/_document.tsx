import Document, { Head, Html, Main, NextScript } from 'next/document';

import React from 'react';

export default class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:image" content={'/logo.jpg'} />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto:wght@100&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ height: '100%', overflowX: 'hidden' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
