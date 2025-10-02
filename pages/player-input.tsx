import { useRouter } from "next/router";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Description } from "../components/description/description";
import { Grid } from "../components/grid/grid";
import { LinkThatLooksLikeButton } from "../components/linkThatLooksLikeButton/linkThatLooksLikeButton";
import { Page } from "../components/page/page";
import { ParticipantInput } from "../pageComponents/participantInput/participantInput";
import { useAppSelector } from "../store";
import { getParticipants } from "../store/participants/selectors";

export default function PlayerInput() {
  const participants = useAppSelector(getParticipants);
  const router = useRouter();

  useEffect(() => {
    if (!participants?.length) {
      void router.replace("/");
    }
  }, [participants?.length, router]);

  return (
    <Page>
      <Description>
        <FormattedMessage id="playerInput.header" />
      </Description>
      <Grid>
        {participants?.map((participant, index) => (
          <ParticipantInput
            key={participant.key}
            participant={participant}
            index={index}
          />
        ))}
      </Grid>
      <LinkThatLooksLikeButton
        href="/play"
        disabled={participants.some((participant) => !participant.name)}
      >
        <h2>
          <FormattedMessage id="playerInput.buttonLabel" />
        </h2>
      </LinkThatLooksLikeButton>
    </Page>
  );
}
