import React from "react";
import styles from "./Backdrop.module.css";
import { BackdropProps } from "./Backdrop.types";

function Backdrop(props: BackdropProps) {
  const { children } = props;

  return <div className={styles.backdrop}>{children}</div>;
}

export default Backdrop;
