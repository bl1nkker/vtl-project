import React from "react";
import Head from "next/head";
import { Navbar } from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="VTL project app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default Layout;
