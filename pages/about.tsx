import React from "react";
import styles from "./../styles/About.module.scss";
import Image from "next/image";
import fifteenYearImg from "./../public/imports/15-years.svg";

interface Props {}

const About = (props: Props) => {
  return (
    <main className={styles.main}>
      <section className={styles.content__header}>
        <h3>добро пожаловать в мир точных решений, точных подшипников!</h3>
        <p>
          VTL является одним из ведущих производителей подшипников в Европе. Мы
          создаем индивидуальные решения с тщательно отобранными материалами,
          отличным качеством изготовления и главным преимуществом являются
          новейшие технологии. Доверие завоеванное во многих отраслях и
          континентах, мотивирует нас к постоянному улучшению с VTL.
        </p>
        <p>
          VTL - это больше, чем подшипники - это команда экспертов, которые с
          энтузиазмом сталкиваются с вызовами наших клиентов.
        </p>
      </section>

      <section className={styles.content__illustration}>
        <Image src={fifteenYearImg} alt="bearing-1" width={640} height={640} />
      </section>
    </main>
  );
};

export default About;
