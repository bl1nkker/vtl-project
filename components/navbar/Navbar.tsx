import React from "react";
import Image from "next/image";
import styles from "./../../styles/Navbar.module.scss";
import companyLogo from "./../../public/imports/logo-vtl.svg";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useRouter } from "next/router";

interface Props {}

export const Navbar = (props: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/`);
  };
  return (
    <nav className={styles.navbar__container}>
      <Image
        className={styles.company__logo}
        width={30}
        height={30}
        alt="company-logo"
        src={companyLogo}
      />
      {router.pathname !== "/" && (
        <button onClick={handleClick}>
          <MoreHorizIcon />
        </button>
      )}
    </nav>
  );
};
