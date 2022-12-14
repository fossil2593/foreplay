import { useRouter } from "next/router";
import * as React from "react";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { participantsSlice } from "../../store/participants/slice";
import { Button } from "../../components/button/button";

interface Props {
  numberOfParticipants: number;
}

export const NumberOfParticipantsButton: React.FC<Props> = ({
  numberOfParticipants,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const setNumberOfParticipants = () => {
    dispatch(
      participantsSlice.actions.setNumberOfParticipants(numberOfParticipants)
    );
    router.push("/player-input");
  };

  return (
    <Button onClick={setNumberOfParticipants}>
      <h2>
        <FormattedMessage
          id="numberOfParticipantsButton.label"
          values={{ numberOfParticipants }}
        />
      </h2>
    </Button>
  );
};
