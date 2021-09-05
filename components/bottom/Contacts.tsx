import React from "react";
import styles from "./../../styles/Contacts.module.scss";
import Image from "next/image";
import vtlLogo from "./../../public/imports/logo-vtl-contacts.svg";
import contactsMap from "./../../public/imports/contacts-map.svg";

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

      {/* <div className={styles.contacts__map}>
        <Image alt="map" width={414} height={414} src={contactsMap} />
      </div> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1628.637325044306!2d76.84168699338171!3d43.23051982459069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369c584a24997%3A0xaa8cc53beb6fa2d7!2sMeditsinskiy%20Tsentr%20Sunkar!5e0!3m2!1sen!2skz!4v1630849713688!5m2!1sen!2skz"
        width="400"
        height="300"
        loading="lazy"
      ></iframe>
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
