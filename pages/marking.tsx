//  Deprecated

import { NextPage } from "next";
import styles from "../styles/Marking.module.scss";

import Image from "next/image";
import silverBearLogo from "./../public/imports/logo-silverbear.svg";
import Footer from "../components/footer/Footer";
import { ICarouselItem } from "../interfaces/interfaces";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Suffix from "../components/home/Suffix";
import {
  carouselProductsData,
  markingSystemData,
  prefixesData,
  pierceClassesData,
  radialData,
} from "../data/tempData";
import Contacts from "../components/bottom/Contacts";
import KeepRolling from "../components/bottom/KeepRolling";
import { MouseEvent, useState } from "react";

const Home: NextPage = () => {
  const [carouselIncr, setCarouselIncr] = useState<number>(0);

  return (
    <>
      {/* <main className={styles.main}>
        <section className={styles.content__header}>
          <Image
            src={silverBearLogo}
            alt="silverbear-logo"
            height={75}
            width={280}
          />
        </section>

        <section className={styles.content__products_carousel}>
          <h3>Основная линейка продуктов</h3>
          <hr />
          <div
            className={styles.products__carousel}
            style={{ transform: `translateX(-${carouselIncr * 300}px)` }}
          >
            {carouselProductsData.map((product: ICarouselItem, key: number) => (
              <div className={styles.carousel__item} key={key}>
                <p>{product.content}</p>
              </div>
            ))}
          </div>
          <div className={styles.carousel__actions}>
            <div className={styles.products__indexes}>
              <span className={styles.current__product}>
                {carouselIncr < 9 ? `0${carouselIncr + 1}` : carouselIncr + 1}
              </span>
              /
              {carouselProductsData.length < 9
                ? `0${carouselProductsData.length}`
                : carouselProductsData.length}
              .
            </div> */}
      {/* Decrement */}
      {/* <button
              className={styles.decrement}
              style={{ opacity: carouselIncr > 0 ? 1 : 0 }}
              disabled={carouselIncr <= 0}
              onClick={() => setCarouselIncr((prevState) => prevState - 1)}
            >
              <ArrowRightAltIcon fontSize="large" />
            </button> */}
      {/* Increment */}
      {/* <button
              style={{
                opacity: carouselIncr < carouselProductsData.length - 1 ? 1 : 0,
              }}
              disabled={carouselIncr >= carouselProductsData.length - 1}
              onClick={() => setCarouselIncr((prevState) => prevState + 1)}
            >
              <ArrowRightAltIcon fontSize="large" />
            </button>
          </div>
        </section>

        <section className={styles.content__marking_system}>
          <h2>Система маркировки шарикоподшипников</h2>
          <h4>Суффиксы</h4>
          <ul className={styles.suffixes__container}>
            {markingSystemData.map((suffix: any, key: number) => (
              <Suffix suffix={suffix} key={key} />
            ))}
          </ul>
        </section>

        <section className={styles.content__additional}>
          <h2>Префиксы</h2>
          <ul className={styles.suffixes__container}>
            {prefixesData.map((prefix: any, key: number) => (
              <Suffix suffix={prefix} key={key} />
            ))}
          </ul>
        </section>

        <section className={styles.content__additional}>
          <h2>Радиальные зазоры</h2>
          <ul className={styles.suffixes__container}>
            {radialData.map((prefix: any, key: number) => (
              <Suffix suffix={prefix} key={key} />
            ))}
          </ul>
        </section>
        <section className={styles.content__additional}>
          <h2>Классы точности</h2>
          <ul className={styles.suffixes__container}>
            {pierceClassesData.map((prefix: any, key: number) => (
              <Suffix suffix={prefix} key={key} />
            ))}
          </ul>
        </section>

        <Contacts />
        <KeepRolling /> */}
      {/* <Footer /> */}
      {/* </main> */}
    </>
  );
};

export default Home;
