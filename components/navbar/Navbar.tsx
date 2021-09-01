import React from "react";
import Image from "next/image";
import styles from "./../../styles/Navbar.module.scss";
import companyLogo from "./../../public/imports/logo-vtl.svg";

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <nav className={styles.navbar__container}>
      <Image
        className={styles.company__logo}
        width={30}
        height={30}
        alt="company-logo"
        src={companyLogo}
      />
      <div>Three Dots</div>
    </nav>
  );
};
