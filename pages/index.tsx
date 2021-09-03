import { useRouter } from "next/router";
import React from "react";
import HomeFooter from "../components/footer/HomeFooter";
import styles from "../styles/Home.module.scss";

interface Props {}

const Home = (props: Props) => {
  const router = useRouter();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log(event);
    router.push(`/${event.target.name}`);
  };
  return (
    <>
      <main className={styles.main}>
        <section className={styles.content__buttons}>
          <button name="marking" onClick={(event) => handleClick(event)}>
            Продукты
          </button>
          <button name="marking" onClick={(event) => handleClick(event)}>
            Контакты
          </button>
          <button name="about" onClick={(event) => handleClick(event)}>
            Мы
          </button>
        </section>
      </main>
      <HomeFooter />
    </>
  );
};

export default Home;
