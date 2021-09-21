import { GetStaticPaths } from "next";
import React from "react";
import KeepRolling from "../../../components/bottom/KeepRolling";
import Footer from "../../../components/footer/Footer";
import { productsList } from "../../../data/tempData";
import Image from "next/image";
import styles from "../../../styles/Marking.module.scss";
import styles_items from "../../../styles/ListedItems.module.scss";

// Delete this later
import bearingFirstImg from "../../../public/imports/bearing-1.svg";
import bearingSecondImg from "../../../public/imports/bearing-2.svg";
import silverBearWithBearImg from "../../../public/imports/silverbear-with-bear.svg";
import { IProduct } from "../../../interfaces/interfaces";
import Contacts from "../../../components/bottom/Contacts";
import Suffix from "../../../components/home/Suffix";

interface Props {
  product: IProduct;
}

const ProductMarking = ({ product }: Props) => {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.content__header}>
          <Image
            src={silverBearWithBearImg}
            alt="silverbear-logo"
            height={414}
            width={414}
          />
        </section>
        <section className={styles.content__marking_system}>
          <h2>Система маркировки шарикоподшипников</h2>
          <h4>Суффиксы</h4>
          <ul className={styles_items.suffixes__container}>
            {product.marking?.suffixes?.map((suffix: any, key: number) => (
              <Suffix suffix={suffix} key={key} />
            ))}
          </ul>
        </section>
        {product.marking?.prefixes && (
          <section className={styles_items.content__additional}>
            <h2>Префиксы</h2>
            <ul className={styles_items.suffixes__container}>
              {product.marking?.prefixes?.map((prefix: any, key: number) => (
                <Suffix suffix={prefix} key={key} />
              ))}
            </ul>
          </section>
        )}
        {product.marking?.indexes && (
          <section className={styles_items.content__additional}>
            <h2>Префиксы</h2>
            <ul className={styles_items.suffixes__container}>
              {product.marking?.indexes?.map((prefix: any, key: number) => (
                <Suffix suffix={prefix} key={key} />
              ))}
            </ul>
          </section>
        )}
        {product.marking?.radialClearances && (
          <section className={styles_items.content__additional}>
            <h2>Радиальные зазоры</h2>
            <ul className={styles_items.suffixes__container}>
              {product.marking?.radialClearances?.map(
                (prefix: any, key: number) => (
                  <Suffix suffix={prefix} key={key} />
                )
              )}
            </ul>
          </section>
        )}
        {product.marking?.axialClearances && (
          <section className={styles_items.content__additional}>
            <h2>Осевые зазоры</h2>
            <ul className={styles_items.suffixes__container}>
              {product.marking?.axialClearances?.map(
                (prefix: any, key: number) => (
                  <Suffix suffix={prefix} key={key} />
                )
              )}
            </ul>
          </section>
        )}

        {product.marking?.accuracyClasses && (
          <section className={styles_items.content__additional}>
            <h2>Классы точности</h2>
            <ul className={styles_items.suffixes__container}>
              {product.marking?.accuracyClasses?.map(
                (prefix: any, key: number) => (
                  <Suffix suffix={prefix} key={key} />
                )
              )}
            </ul>
          </section>
        )}

        <Contacts />
        <KeepRolling />
      </main>
      <Footer productNumber={product.productNumber} />
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

export default ProductMarking;
