import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
// STYLES
import bootstrap from "styles/vendor/bootstrap.min.css";
import main from "styles/main.scss";
import normalyze from "styles/normalize.css";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
            integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
            crossorigin="anonymous"
          />
          <style dangerouslySetInnerHTML={{ __html: bootstrap }} />
          <style dangerouslySetInnerHTML={{ __html: main }} />
          <style dangerouslySetInnerHTML={{ __html: normalyze }} />
          <link rel="icon" href="static/img/favicon.ico" />
          <title>Liberty Coin </title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
