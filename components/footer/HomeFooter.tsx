import React from "react";
import styles from "./../../styles/Footer.module.scss";
import { useRouter } from "next/router";

interface Props {}

const HomeFooter = (props: Props) => {
  const router = useRouter();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    router.push("https://api.whatsapp.com/send?phone=1234567890");
  };
  return (
    <footer className={styles.home__footer}>
      <button onClick={(event) => handleClick(event)}>whatsapp</button>
      <button onClick={(event) => handleClick(event)}>telegram</button>
      <button onClick={(event) => handleClick(event)}>telephone</button>
    </footer>
  );
};

export default HomeFooter;
