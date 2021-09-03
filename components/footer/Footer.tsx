import React, { useState } from "react";
import styles from "./../../styles/Footer.module.scss";
import suffixArrowShow from "./../../public/imports/suffix-arrow-show.svg";
import suffixArrowHide from "./../../public/imports/suffix-arrow-hide.svg";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {}

const Footer = (props: Props) => {
  const [contentMode, setContentMode] = useState<string>("hide");
  const router = useRouter();
  console.log(router);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    router.push(`/${event.target.name}`);
  };

  const handleToggleMode = () => {
    setContentMode((prevState: any) => (prevState == "hide" ? "show" : "hide"));
  };
  return (
    <footer className={styles.product__footer}>
      <section className={styles.page__number}>
        <span>01</span>
      </section>
      <section className={styles.product__tabs}>
        <button
          className={
            router.pathname === "/products" ? styles.active__path : undefined
          }
          name="products"
          onClick={(event) => handleClick(event)}
        >
          Описание
        </button>
        <button
          className={
            router.pathname === "/marking" ? styles.active__path : undefined
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
