import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: 11, cart: [] },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    addelement: (state) => {
      state.value = [2,3,4]
    }
  },
});

export const { increment, addelement } = cartSlice.actions;

export default cartSlice.reducer;
