import React from "react";
import Image from "next/image";

import keepLogo from "./../../public/imports/logo-keep.svg";
import keepLogoUp from "./../../public/imports/logo-keep-up.svg";
import styles from "./../../styles/KeepRolling.module.scss";

interface Props {}

const KeepRolling = (props: Props) => {
  return (
    <section className={styles.content__footer}>
      <Image src={keepLogo} alt="keep-logo" height={140} width={140} />
      <Image src={keepLogoUp} alt="keep-logo-up" height={140} width={140} />
    </section>
  );
};

export default KeepRolling;
