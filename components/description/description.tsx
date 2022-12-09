import * as React from "react";
import styles from "./description.module.scss";

interface Props {
  children: React.ReactNode;
}

export const Description: React.FC<Props> = ({ children }) => (
  <p className={styles.description}>{children}</p>
);
