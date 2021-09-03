import React, { useState } from "react";
import styles from "./../styles/Products.module.scss";

import Image from "next/image";
import suffixArrowShow from "./../public/imports/suffix-arrow-show.svg";
import suffixArrowHide from "./../public/imports/suffix-arrow-hide.svg";

import { productsList } from "./../temp/tempData";
import Contacts from "../components/bottom/Contacts";
import KeepRolling from "../components/bottom/KeepRolling";

interface Props {}

const Products = (props: Props) => {
  // hide, show
  const [contentMode, setContentMode] = useState<string>("hide");

  const handleToggleMode = () => {
    setContentMode((prevState: any) => (prevState == "hide" ? "show" : "hide"));
  };
  console.log(productsList);
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
              <span>0{key + 1}</span>
              <button onClick={handleToggleMode}>
                {contentMode == "hide" ? (
                  <Image
                    src={suffixArrowShow}
                    alt="suffix-arrow-show"
                    width={18}
                    height={18}
                  />
                ) : (
                  <Image
                    src={suffixArrowHide}
                    alt="suffix-arrow-hide"
                    width={18}
                    height={18}
                  />
                )}
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
