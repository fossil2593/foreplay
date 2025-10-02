import { ReactNode, FC } from "react";
import styles from "./card.module.scss";

interface Props {
  children: ReactNode;
}

export const Card: FC<Props> = ({ children }) => (
  <div className={styles.card}>{children}</div>
);
