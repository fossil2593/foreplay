import Link from "next/link";
import * as React from "react";
import styles from "./linkThatLooksLikeButton.module.scss";

interface Props {
  href: string;
  children: string | JSX.Element;
}

export const LinkThatLooksLikeButton: React.FC<Props> = ({
  href,
  children,
}) => (
  <Link href={href} className={styles.link}>
    {children}
  </Link>
);
