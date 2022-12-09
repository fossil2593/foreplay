import * as React from "react";
import styles from "./footer.module.scss";

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <a
      href="https://www.joyclub.de/profile/8641279.herr_und_frau.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by herr_und_frau
    </a>
  </footer>
);
