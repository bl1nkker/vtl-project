import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [productId, setProductId] = useState<string | null>(null);
  return (
    <Layout>
      <Component
        {...pageProps}
        setProductId={setProductId}
        productId={productId}
      />
    </Layout>
  );
}
export default MyApp;
