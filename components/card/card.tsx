import * as React from "react";
import styles from "./card.module.scss";

interface Props {
  children: React.ReactNode;
}

export const Card: React.FC<Props> = ({ children }) => (
  <div className={styles.card}>{children}</div>
);
