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

      <div className={styles.contacts__map}>
        {/* <Image alt="map" width={414} height={414} src={contactsMap} /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.167960873416!2d71.41965641562598!3d51.123809846497906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245853b26473bdf%3A0x5683555ff84677dc!2sVTL%20Kazakhstan!5e0!3m2!1sen!2skz!4v1631798147547!5m2!1sen!2skz"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
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
