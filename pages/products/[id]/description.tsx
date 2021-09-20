import { GetStaticPaths } from "next";
import React from "react";
import KeepRolling from "../../../components/bottom/KeepRolling";
import Footer from "../../../components/footer/Footer";
import { productsList } from "../../../data/tempData";
import Image from "next/image";
import styles from "../../../styles/ProductPage.module.scss";

// Delete this later
import bearingFirstImg from "../../../public/imports/bearing-1.svg";
import bearingSecondImg from "../../../public/imports/bearing-2.svg";
import silverBearWithBearImg from "../../../public/imports/silverbear-with-bear.svg";
import { IProduct } from "../../../interfaces/interfaces";

interface Props {
  product: IProduct;
}

const ProductDescription = ({ product }: Props) => {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.content__header}>
          <h3>{product.name}</h3>
          <p>{product.productInfoAboveBearing}</p>
        </section>
        <section className={styles.content__illustration}>
          {/* Change this later */}
          <Image
            src={bearingFirstImg}
            alt="bearing-1"
            width={414}
            height={414}
          />
        </section>

        <section className={styles.content__paragraphs}>
          {product.productInfoAboveBluePrint
            .split(".")
            .map((paragraph: any, key: number) => (
              <p key={key}>{paragraph}</p>
            ))}
        </section>
        <section className={styles.content__illustration}>
          {/* Change this later */}
          <Image
            src={bearingSecondImg}
            alt="bearing-1"
            width={414}
            height={414}
          />
        </section>

        <section className={styles.content__paragraphs}>
          {product.productInfoAboveBearIcon
            .split(".")
            .map((paragraph: any, key: number) => (
              <p key={key}>{paragraph}</p>
            ))}
        </section>

        {/* Change this later */}
        <Image
          src={silverBearWithBearImg}
          alt="bearing-1"
          width={414}
          height={414}
        />
        <section className={styles.content__paragraphs}>
          {product.productInfoUnderBearIcon
            .split(".")
            .map((paragraph: any, key: number) => (
              <p key={key}>{paragraph}</p>
            ))}
        </section>
        <KeepRolling />
      </main>

      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = productsList.map((product) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  const product = productsList.find((product) => product.id === id);
  return {
    props: {
      product,
    },
  };
};

export default ProductDescription;
