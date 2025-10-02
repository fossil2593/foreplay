import { ReactNode, FC } from "react";
import styles from "./description.module.scss";

interface Props {
  children: ReactNode;
}

export const Description: FC<Props> = ({ children }) => (
  <p className={styles.description}>{children}</p>
);
