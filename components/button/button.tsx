import * as React from "react";
import styles from "./button.module.scss";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ onClick, children }) => (
  <button onClick={onClick} className={styles.button}>
    {children}
  </button>
);
