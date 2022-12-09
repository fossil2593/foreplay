import * as React from "react";
import styles from "./button.module.scss";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  type?: "primary" | "secondary";
}

export const Button: React.FC<Props> = ({ onClick, children, type }) => (
  <button onClick={onClick} className={styles.button} data-type={type}>
    {children}
  </button>
);
