import { useRouter } from "next/router";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { participantsSlice } from "../../store/participants/slice";
import { Button } from "../../components/button/button";

interface Props {
  numberOfParticipants: number;
}

export const NumberOfParticipantsButton: FC<Props> = ({
  numberOfParticipants,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const setNumberOfParticipants = () => {
    dispatch(
      participantsSlice.actions.setNumberOfParticipants(numberOfParticipants)
    );
    void router.push("/player-input");
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
