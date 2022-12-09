import * as React from "react";
import { DocumentHead } from "../documentHead/documentHead";
import { Footer } from "../footer/footer";
import styles from "../../styles/default.module.scss";

interface Props {
  children: React.ReactNode;
}

export const Page: React.FC<Props> = ({ children }) => (
  <div className={styles.container}>
    <DocumentHead />

    <main className={styles.main}>{children}</main>

    <Footer />
  </div>
);
