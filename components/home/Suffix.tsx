import React, { useEffect, useRef, useState } from "react";
import suffixArrowShow from "./../../public/imports/suffix-arrow-show.svg";
import suffixArrowHide from "./../../public/imports/suffix-arrow-hide.svg";
import moreIcon from "./../../public/imports/icons/more-icon.svg";
import Image from "next/image";
import styles from "./../../styles/ListedItems.module.scss";

interface Props {
  suffix: {
    id: number;
    name: string;
    description: string;
  };
}

const Suffix: React.FC<Props> = ({ suffix }) => {
  // hide, show
  const [contentMode, setContentMode] = useState<string>("hide");

  const handleToggleMode = () => {
    setContentMode((prevState: any) => (prevState == "hide" ? "show" : "hide"));
  };
  return (
    <li>
      <div className={styles.item__header}>
        {suffix.name.includes("*") ? (
          <h1>
            {suffix.name.slice(0, -1)} <span className={styles.starred}>*</span>
          </h1>
        ) : (
          <h1>{suffix.name}</h1>
        )}
        <button onClick={handleToggleMode}>
          <Image
            className={
              styles.rotate__arrow +
              " " +
              (contentMode == "hide"
                ? styles.rotate__arrow_hide
                : styles.rotate__arrow_show)
            }
            src={moreIcon}
            alt="suffix-arrow-show"
            width={30}
            height={30}
          />
        </button>
      </div>

      {suffix.description.includes("*") ? (
        <div
          className={
            styles.item__content +
            " " +
            (contentMode == "show"
              ? styles.item__content_show
              : styles.item__content_hide)
          }
        >
          {suffix.description.slice(0, -1)}{" "}
          <span className={styles.starred}>*</span>
        </div>
      ) : (
        <div
          className={
            styles.item__content +
            " " +
            (contentMode == "show"
              ? styles.item__content_show
              : styles.item__content_hide)
          }
        >
          {suffix.description}
        </div>
      )}
    </li>
  );
};

export default Suffix;
