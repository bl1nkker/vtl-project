import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./../../styles/Products.module.scss";

import Image from "next/image";
import suffixArrowHide from "./../../public/imports/suffix-arrow-hide.svg";

import { productsList } from "../../data/tempData";
import Contacts from "../../components/bottom/Contacts";
import KeepRolling from "../../components/bottom/KeepRolling";
import router from "next/router";

interface Props {}

const Products = (props: Props) => {
  const handleToggleMode = (id: string) => {
    router.push(`products/${id}/description`);
  };
  return (
    <main className={styles.main}>
      <section className={styles.content__products_list}>
        {productsList.map((product: any, key: number) => (
          <div
            key={key}
            className={styles.product__container}
            style={{
              backgroundImage: `
            linear-gradient(to right bottom, rgba(0, 0, 0, 0.911) 40%, rgba(71, 71, 71, 0.993) 100%), 
            url(${product.backgroungImg})
            `,
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.content}</p>
            <div className={styles.product__actions}>
              <span>{key < 9 ? `0${key + 1}` : `${key + 1}`}</span>
              <button onClick={() => handleToggleMode(product.id as string)}>
                <Image
                  src={suffixArrowHide}
                  alt="suffix-arrow-hide"
                  width={18}
                  height={18}
                />
              </button>
            </div>
          </div>
        ))}
      </section>
      <Contacts />
      <KeepRolling />
    </main>
  );
};

export default Products;
