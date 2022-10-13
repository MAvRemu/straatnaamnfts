import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: 11, cart: [1,7,8], inventory: [], showcart: false },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    addelement: (state, action) => {
      state.cart.push(action.payload);
    },
    setinventory: (state, action) => {
      state.inventory = action.payload;
    },
    showcart: (state) => {
      state.showcart = !state.showcart;
    },
  },
});

export const { increment, addelement, setinventory, showcart } = cartSlice.actions;

export default cartSlice.reducer;
