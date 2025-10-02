import { MouseEvent, FC, ReactNode } from "react";
import styles from "./button.module.scss";

interface Props {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type?: "primary" | "secondary";
}

export const Button: FC<Props> = ({ onClick, children, type }) => (
  <button onClick={onClick} className={styles.button} data-type={type}>
    {children}
  </button>
);
