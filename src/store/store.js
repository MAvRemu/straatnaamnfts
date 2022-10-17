import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import walletReducer from "./walletSlice"

export default configureStore({ reducer: { cart: cartReducer, wallet: walletReducer} });
