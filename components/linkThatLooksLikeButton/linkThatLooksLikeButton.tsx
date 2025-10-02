import Link from "next/link";
import { FC, JSX } from "react";
import styles from "./linkThatLooksLikeButton.module.scss";

interface Props {
  href: string;
  children: string | JSX.Element;
  disabled?: boolean;
}

export const LinkThatLooksLikeButton: FC<Props> = ({
  href,
  children,
  disabled,
}) =>
  disabled ? (
    <a aria-disabled={true} className={styles.link}>
      {children}
    </a>
  ) : (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
