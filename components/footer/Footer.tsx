import React, { useState } from "react";
import styles from "./../../styles/Footer.module.scss";
import suffixArrowShow from "./../../public/imports/suffix-arrow-show.svg";
import suffixArrowHide from "./../../public/imports/suffix-arrow-hide.svg";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  productNumber: number;
}

const Footer = ({ productNumber }: Props) => {
  const [contentMode, setContentMode] = useState<string>("hide");
  const router = useRouter();
  const handleClick = (event: any) => {
    event.preventDefault();
    const productId = router.query.id;
    router.push(`/products/${productId}/${event.target.name}`);
  };

  const handleToggleMode = () => {
    setContentMode((prevState: any) => (prevState == "hide" ? "show" : "hide"));
    router.push(`/products`);
  };
  return (
    <footer className={styles.product__footer}>
      <section className={styles.page__number}>
        <span>
          {productNumber < 10 ? `0${productNumber}` : `${productNumber}`}
        </span>
      </section>
      <section className={styles.product__tabs}>
        <button
          className={
            router.pathname.split("/")[3] === "description"
              ? styles.active__path
              : undefined
          }
          name="description"
          onClick={(event) => handleClick(event)}
        >
          Описание
        </button>
        <button
          className={
            router.pathname.split("/")[3] === "marking"
              ? styles.active__path
              : undefined
          }
          name="marking"
          onClick={(event) => handleClick(event)}
        >
          Маркировка
        </button>
      </section>
      <section className={styles.product__arrow}>
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
      </section>
    </footer>
  );
};

export default Footer;
