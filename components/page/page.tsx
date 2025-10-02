import { ReactNode, FC } from "react";
import { DocumentHead } from "../documentHead/documentHead";
import { Footer } from "../footer/footer";
import styles from "../../styles/default.module.scss";

interface Props {
  children: ReactNode;
}

export const Page: FC<Props> = ({ children }) => (
  <div className={styles.container}>
    <DocumentHead />

    <main className={styles.main}>{children}</main>

    <Footer />
  </div>
);
