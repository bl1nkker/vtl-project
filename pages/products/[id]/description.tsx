import React from "react";
import KeepRolling from "../../../components/bottom/KeepRolling";
import Footer from "../../../components/footer/Footer";
import { productsList } from "../../../data/tempData";
import Image from "next/image";
import styles from "../../../styles/ProductPage.module.scss";
import styles_items from "../../../styles/ListedItems.module.scss";
import silverBearWithBearImg from "../../../public/imports/silverbear-with-bear.svg";
import { IProduct } from "../../../interfaces/interfaces";
import Suffix from "../../../components/home/Suffix";

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
            src={product.productImage}
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
          {product.productBlueprintImages.map((image) => (
            <Image
              key={image.id}
              src={image.imagePath}
              alt="bearing-1"
              width={414}
              height={414}
            />
          ))}
        </section>

        <section className={styles.content__paragraphs}>
          {product.productInfoAboveBearIcon
            .split(".")
            .map((paragraph: any, key: number) => (
              <p key={key}>{paragraph}</p>
            ))}
        </section>

        {product.selfAligningGroups && (
          <section className={styles_items.content__additional}>
            <h2>
              Существует 6 основных групп самоустанавливающихся подшипников
            </h2>
            <ul className={styles_items.suffixes__container}>
              {product.selfAligningGroups.map((prefix: any, key: number) => (
                <Suffix suffix={prefix} key={key} />
              ))}
            </ul>
          </section>
        )}

        {product.waysFasteningShaft && (
          <section className={styles_items.content__additional}>
            <h2>
              Существует 6 основных групп самоустанавливающихся подшипников
            </h2>
            <ul className={styles_items.suffixes__container}>
              {product.waysFasteningShaft.map((prefix: any, key: number) => (
                <Suffix suffix={prefix} key={key} />
              ))}
            </ul>
          </section>
        )}
        {product.shaftPinPairs && (
          <section className={styles_items.content__additional}>
            <h2>Наиболее часто применяемые пары вал-штифт</h2>
            <ul className={styles_items.suffixes__container}>
              {product.shaftPinPairs.map((prefix: any, key: number) => (
                <Suffix suffix={prefix} key={key} />
              ))}
            </ul>
          </section>
        )}

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

export default ProductDescription;
