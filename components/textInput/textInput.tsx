import { ChangeEvent, FC } from "react";
import styles from "./textInput.module.scss";

interface Props {
  id: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextInput: FC<Props> = ({ id, value, onChange }) => {
  const onChange_ = (event: ChangeEvent<HTMLInputElement>) => {
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
