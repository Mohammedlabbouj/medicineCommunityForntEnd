import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface emailState {
  email: string;
}

const initailState: emailState = {
  email: "",
};

const emailSlice = createSlice({
  name: "email",
  initialState: initailState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    clearEmail: (state) => {
      state.email = "";
    },
  },
});

export const { setEmail, clearEmail } = emailSlice.actions;

export const selectEmail = (state: RootState) => state.email.email;

export default emailSlice.reducer;
