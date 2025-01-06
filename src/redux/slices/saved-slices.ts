import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IRecipes } from "../../types";

export interface IWishListState {
  value: IRecipes[];
}

const initialState: IWishListState = {
  value: JSON.parse(localStorage.getItem("wishlist") || "[]"),
};

export const savedSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    savedRecept(state, action: PayloadAction<IRecipes>) {
      const index = state.value.findIndex(({ id }) => id === action.payload.id);
      if (index < 0) {
        state.value.push(action.payload);
      } else {
        state.value = state.value.filter(({ id }) => id !== action.payload.id);
      }

      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});

export const { savedRecept } = savedSlice.actions;
export default savedSlice.reducer;
