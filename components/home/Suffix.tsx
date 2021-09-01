import React, { useState } from "react";
import suffixArrowShow from "./../../public/imports/suffix-arrow-show.svg";
import suffixArrowHide from "./../../public/imports/suffix-arrow-hide.svg";
import Image from "next/image";
import styles from "./../../styles/Home.module.scss";

interface Props {}

const Suffix = (props: Props) => {
  // hide, show
  const [contentMode, setContentMode] = useState<string>("hide");
  const handleToggleMode = () => {
    setContentMode((prevState: any) => (prevState == "hide" ? "show" : "hide"));
  };
  return (
    <li>
      <div className={styles.item__header}>
        <h1>RS / 2RS</h1>
        <button onClick={handleToggleMode}>
          {contentMode == "hide" ? (
            <Image
              src={suffixArrowShow}
              alt="suffix-arrow-show"
              width={18}
              height={18}
            />
          ) : (
            <Image
              src={suffixArrowHide}
              alt="suffix-arrow-hide"
              width={18}
              height={18}
            />
          )}
        </button>
      </div>
      {contentMode == "show" && (
        <div className={styles.item__content}>
          Бесконтактное уплотнение из бутадиен -акрилонитрилового каучука (NBR)
          с одной /обеих сторон подшипника *
        </div>
      )}
    </li>
  );
};

export default Suffix;
