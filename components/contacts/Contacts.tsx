import React from "react";
import styles from "./../../styles/Contacts.module.scss";
import Image from "next/image";
import vtlLogo from "./../../public/imports/logo-vtl-contacts.svg";

interface Props {}

const Contacts = (props: Props) => {
  return (
    <section className={styles.content__contacts}>
      <div className={styles.contacts__header}>
        <Image src={vtlLogo} alt="keep-logo" height={96} width={96} />
        <div className={styles.address}>
          <p>
            ТОО «VTL Kazakhstan» Проспект Әл-Фараби, 37/1, 135 бутик, Нур-Султан
          </p>
        </div>
      </div>

      <div className={styles.contacts__map}>
        <Image
          alt="map"
          width={414}
          height={414}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyj1cToIdo_vfRjKFBwWkFb5a3rCZyRGouUg&usqp=CAU"
        />
      </div>

      <div className={styles.contacts__info}>
        <div className={styles.info}>
          <span className={styles.title}>Whatsapp</span>
          <span className={styles.content}>+7 (776) 845 60 69</span>
        </div>
        <div className={styles.info}>
          <span className={styles.title}>telephone</span>
          <span className={styles.content}>+7 (7172) 790 400</span>
        </div>
        <div className={styles.info}>
          <span className={styles.title}>e-mail</span>
          <span className={styles.content}>INFO@VTLKAZAKHSTAN.COM</span>
        </div>
        <div className={styles.info}>
          <span className={styles.title}>telegram</span>
          <span className={styles.content}>@VTLKAZAKHSTAN</span>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
