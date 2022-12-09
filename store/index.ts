import { configureStore } from "@reduxjs/toolkit";
import { participantsSlice } from "./participants/slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { spicinessSlice } from "./spiciness/slice";

export const store = configureStore({
  reducer: {
    participants: participantsSlice.reducer,
    spiciness: spicinessSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
