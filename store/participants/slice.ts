import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createParticipant } from "./create";

export type ParticipantsStore = Participant[];

export interface Participant {
  key: string;
  name: string;
}

const initialState: ParticipantsStore = [];

export const participantsSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {
    setNumberOfParticipants: (state, action: PayloadAction<number>) => {
      const participants: Participant[] = [];

      for (let i = 0; i < action.payload; i++) {
        participants.push(createParticipant());
      }

      return participants;
    },
    updateParticipantName: (
      state,
      action: PayloadAction<{ key: string; name: string }>
    ) => {
      return state.map((participant) => {
        if (participant.key !== action.payload.key) {
          return participant;
        }

        return {
          ...participant,
          name: action.payload.name,
        };
      });
    },
  },
});
