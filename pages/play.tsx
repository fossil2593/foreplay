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

const actions = ["kiss", "lick", "massage", "blow on", "nibble on"];
const areas = ["lips", "stomach", "thighs", "chest", "butt", "ear", "neck"];

export default function Play() {
  const participants = useAppSelector(getParticipants) || [];
  const [rollCount, setRollCount] = React.useState(0);
  const router = useRouter();

  React.useEffect(() => {
    if (!participants?.length) {
      router.replace("/");
    }
  }, [participants?.length, router]);

  const rolledActor = participants[rollCount % participants.length];
  const rolledAction = actions[getRandomInteger(actions.length - 1)];
  const rolledArea = areas[getRandomInteger(areas.length - 1)];
  let rolledParticipantIndex = getRandomInteger(participants.length - 1);

  while (rolledParticipantIndex === rollCount % participants.length) {
    rolledParticipantIndex = getRandomInteger(participants.length - 1);
  }

  const rolledRecipient = participants[rolledParticipantIndex];

  const rollAgain = () => {
    setRollCount(rollCount + 1);
  };

  return (
    <Page>
      <Description>
        <FormattedMessage
          id="play.instruction"
          values={{
            actor: rolledActor?.name,
            recipient: rolledRecipient?.name,
            action: rolledAction,
            area: rolledArea,
          }}
        />
      </Description>
      <Button onClick={rollAgain}>
        <h2>
          <FormattedMessage id="play.nextTurn" />
        </h2>
      </Button>
      <Spacer />
      <Link href="/">
        <FormattedMessage id="play.startOver" />
      </Link>
    </Page>
  );
}
