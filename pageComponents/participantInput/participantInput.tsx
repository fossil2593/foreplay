import { FC } from "react";
import { Card } from "../../components/card/card";
import { TextInput } from "../../components/textInput/textInput";
import { Participant, participantsSlice } from "../../store/participants/slice";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import styles from "./participantInput.module.scss";

interface Props {
  participant: Participant;
  index: number;
}

export const ParticipantInput: FC<Props> = ({ participant, index }) => {
  const dispatch = useDispatch();

  const onChange = (value: string) => {
    dispatch(
      participantsSlice.actions.updateParticipantName({
        key: participant.key,
        name: value,
      })
    );
  };

  return (
    <Card>
      <label
        htmlFor={`participant-${participant.key}`}
        className={styles.label}
      >
        <FormattedMessage
          id="playerInput.label"
          values={{ participantNumber: index + 1 }}
        />
      </label>
      <TextInput
        id={`participant-${participant.key}`}
        value={participant.name}
        onChange={onChange}
      />
    </Card>
  );
};
