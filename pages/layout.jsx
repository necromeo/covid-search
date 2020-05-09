import Head from "next/head";
import Link from "next/link";

let pageTitle = "COVID-19";

const Layout = ({ pageTitle, children }) => (
  <div>
    <Head>
      <title>{pageTitle}</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      ></link>
      <link rel="stylesheet" href="/styles.css"></link>
    </Head>
    <div className="navbar navbar-expand-lg mt-3 mb-5 pl-5">
      <Link href="/">
        <h1 id="home" className="display-4 mb-0">
          COVID-19
        </h1>
      </Link>
      <h2 className="navbar-nav mr-auto ml-auto display-4">
        <Link href="/tables">
          <h1 id="home" className="display-4 mb-0">
            Tables
          </h1>
        </Link>
      </h2>
      <h2 className="navbar-nav mr-auto ml-auto display-4">
        <Link href="/graphs">
          <h1 id="home" className="display-4 mb-0">
            Graphs
          </h1>
        </Link>
      </h2>
    </div>
    {children}
  </div>
);

export default Layout;
