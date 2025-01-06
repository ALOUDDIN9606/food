import { configureStore } from "@reduxjs/toolkit";
import savedSlice from "./slices/saved-slices";

export const store = configureStore({
  reducer: {
    saved: savedSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
