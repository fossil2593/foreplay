import * as React from "react";
import styles from "./textInput.module.scss";

interface Props {
  id: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextInput: React.FC<Props> = ({ id, value, onChange }) => {
  const onChange_ = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      id={id}
      type="text"
      className={styles.textInput}
      value={value}
      onChange={onChange_}
    />
  );
};
