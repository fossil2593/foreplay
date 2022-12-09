import { createSlice } from "@reduxjs/toolkit";

export type SpicinessStore = number;

const initialState = 0;

export const spicinessSlice = createSlice({
  name: "spiciness",
  initialState,
  reducers: {
    turnItUp: (state) => {
      return state + 1;
    },
  },
});
