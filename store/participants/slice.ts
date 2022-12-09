import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createParticipant } from "./create";

export interface ParticipantsStore {
  participants?: Participant[];
}

export interface Participant {
  key: string;
  name: string;
}

const initialState: ParticipantsStore = {};

export const participantsSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {
    setNumberOfParticipants: (state, action: PayloadAction<number>) => {
      const participants = [];

      for (let i = 0; i < action.payload; i++) {
        participants.push(createParticipant());
      }

      state.participants = participants;
    },
    updateParticipantName: (
      state,
      action: PayloadAction<{ key: string; name: string }>
    ) => {
      state.participants = state.participants?.map((participant) => {
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
