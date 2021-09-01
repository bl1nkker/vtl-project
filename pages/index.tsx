import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/navbar/Navbar";
import styles from "../styles/Home.module.scss";

import Image from "next/image";
import silverBearLogo from "./../public/imports/logo-silverbear.svg";
import keepLogo from "./../public/imports/logo-keep.svg";
import keepLogoUp from "./../public/imports/logo-keep-up.svg";
import arrowAction from "./../public/imports/arrow-action.svg";
import Footer from "../components/footer/Footer";
import { ICarouselItem } from "../interfaces/interfaces";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Suffix from "../components/home/Suffix";

const mainProducts: ICarouselItem[] = [
  {
    id: 1,
    content:
      "Для профессионального применения соответствует требованиям заказчика в отношении долговечности и надежности продукта.",
  },
  {
    id: 2,
    content:
      "Подшипники SilverBear изготовлены из высококачественной стали и подвергается контролируемой термообработке.",
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="VTL project app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
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
          <div className={styles.products__carousel}>
            {mainProducts.map((product: ICarouselItem, key: number) => (
              <div className={styles.carousel__item} key={key}>
                {product.content}
              </div>
            ))}
          </div>
          <div className={styles.carousel__actions}>
            <div className={styles.products__indexes}>
              <span className={styles.current__product}>01</span>/06.
            </div>

            <button>
              <ArrowRightAltIcon fontSize="large" />
            </button>
          </div>
        </section>

        <section className={styles.content__marking_system}>
          <h2>Система маркировки шарикоподшипников</h2>
          <h4>Суффиксы</h4>
          <ul className={styles.suffixes__container}>
            <Suffix />
            <Suffix />
            <Suffix />
            <Suffix />
            <Suffix />
            <Suffix />
            <Suffix />
            <Suffix />
            <Suffix />
          </ul>
        </section>
        <section>Префиксы</section>
        <section>Радиальные зазоры</section>
        <section>Классы точности</section>
        <section className={styles.content__footer}>
          <Image src={keepLogo} alt="keep-logo" height={140} width={140} />
          <Image src={keepLogoUp} alt="keep-logo-up" height={140} width={140} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
