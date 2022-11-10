import Document, { Html, Head, Main, NextScript } from 'next/document';

function CustomDocument(){
    return (
        <Html>
        <Head>
          <meta charSet="UTF-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" /> */}
          
  
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600"
          />
          <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/css/templatemo-style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="assets/js/jquery-3.4.1.min.js"></script>
          <script async src="assets/js/jquery.magnific-popup.min.js"></script>
        </body>
      </Html>
    )
}

CustomDocument.getInitialProps = Document.getInitialProps;

CustomDocument.renderDocument = Document.renderDocument;

export default CustomDocument;