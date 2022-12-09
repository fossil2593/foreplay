import styles from "../../styles/default.module.scss";
import { NumberOfParticipantsButton } from "../numberOfParticipantsButton/numberOfParticipantsButton";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Description } from "../../components/description/description";
import { Grid } from "../../components/grid/grid";

const numbers: number[] = [];

for (let index = 2; index <= 9; index++) {
  numbers.push(index);
}

export const NumberOfParticipants: React.FC = () => (
  <>
    <h1 className={styles.title}>
      <FormattedMessage id="app.title" />
    </h1>

    <Description>
      <FormattedMessage id="numberOfParticipants.header" />
    </Description>

    <Grid>
      {numbers.map((numberOfParticipants) => (
        <NumberOfParticipantsButton
          key={numberOfParticipants}
          numberOfParticipants={numberOfParticipants}
        />
      ))}
    </Grid>
  </>
);
