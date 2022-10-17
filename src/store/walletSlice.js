import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    accounts: null,
    chain: "",
    isConnected: false,
    ethBalance: null,
  },
  reducers: {
    setAccounts: (state, action) => {
      state.accounts = action.payload;
    },
    setChain: (state, action) => {
      state.chain = action.payload;
    },
    setIsConnected: (state, action) => {
      state.isConnected = action.payload;
    },
    setEthBalance: (state, action) => {
      state.ethBalance = action.payload;
    },
  },
});

export const { setAccounts, setChain, setIsConnected, setEthBalance } =
  walletSlice.actions;

export default walletSlice.reducer;
