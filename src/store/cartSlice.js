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
    removeelement: (state, action) => {
      state.cart.splice(state.cart.indexOf(action.payload),1)
    },
    setinventory: (state, action) => {
      state.inventory = action.payload;
    },
    showcart: (state) => {
      state.showcart = !state.showcart;
    },
  },
});

export const { increment, addelement, setinventory, showcart, removeelement } = cartSlice.actions;

export default cartSlice.reducer;
