import { useAppSelector } from "../store";
import * as React from "react";
import { Page } from "../components/page/page";
import { Description } from "../components/description/description";
import { getParticipants } from "../store/participants/selectors";
import { Button } from "../components/button/button";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { getRandomInteger } from "../utilities/getRandomInteger";
import Link from "next/link";
import { Spacer } from "../components/spacer/spacer";
import { useDispatch } from "react-redux";
import { spicinessSlice } from "../store/spiciness/slice";
import { Grid } from "../components/grid/grid";
import { actionsAndAreas } from "../store/actionsAndAreas";

export default function Play() {
  const participants = useAppSelector(getParticipants) || [];
  const spiciness = useAppSelector((state) => state.spiciness);
  const [rollCount, setRollCount] = React.useState(0);
  const router = useRouter();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!participants?.length) {
      router.replace("/");
    }
  }, [participants?.length, router]);

  const rolledActor = participants[rollCount % participants.length];
  const currentSpicinessConfiguration = actionsAndAreas[spiciness];
  const rolledArea =
    currentSpicinessConfiguration[
      getRandomInteger(currentSpicinessConfiguration.length - 1)
    ];
  const rolledAction =
    rolledArea.actions[getRandomInteger(rolledArea.actions.length - 1)];

  let rolledParticipantIndex = getRandomInteger(participants.length - 1);

  while (rolledParticipantIndex === rollCount % participants.length) {
    rolledParticipantIndex = getRandomInteger(participants.length - 1);
  }

  const rolledRecipient = participants[rolledParticipantIndex];

  const rollAgain = () => {
    setRollCount(rollCount + 1);
  };

  const spiceItUp = () => {
    dispatch(spicinessSlice.actions.turnItUp());
  };

  return (
    <Page>
      <Description>
        <FormattedMessage
          id="play.instruction"
          values={{
            actor: rolledActor?.name.trim(),
            recipient: rolledRecipient?.name.trim(),
            action: rolledAction,
            area: rolledArea.area,
          }}
        />
      </Description>
      <Grid>
        <Button onClick={rollAgain}>
          <h2>
            <FormattedMessage id="play.nextTurn" />
          </h2>
        </Button>
        {spiciness < 2 && (
          <Button onClick={spiceItUp} type="secondary">
            <p>
              <FormattedMessage id="play.spiceItUp" />
            </p>
          </Button>
        )}
      </Grid>
      <Spacer />
      <Link href="/">
        <FormattedMessage id="play.startOver" />
      </Link>
    </Page>
  );
}
