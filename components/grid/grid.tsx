import { ReactNode, FC } from "react";
import styles from "./grid.module.scss";

interface Props {
  children: ReactNode;
}

export const Grid: FC<Props> = ({ children }) => (
  <div className={styles.grid}>{children}</div>
);
