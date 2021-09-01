import React from "react";
import Image from "next/image";
import styles from "./../../styles/Navbar.module.scss";
import companyLogo from "./../../public/imports/logo-vtl.svg";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

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
      <button>
        <MoreHorizIcon />
      </button>
    </nav>
  );
};
