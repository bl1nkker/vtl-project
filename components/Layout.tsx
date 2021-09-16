import React from "react";
import Head from "next/head";
import { Navbar } from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="VTL project app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      <>{children}</>
    </>
  );
};

export default Layout;
