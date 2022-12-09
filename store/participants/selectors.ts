import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const getParticipantsStore = (state: RootState) => state.participants;

export const getParticipants = createSelector(
  [getParticipantsStore],
  (slice) => slice.participants
);
