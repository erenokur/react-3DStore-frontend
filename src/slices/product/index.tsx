import { createSlice } from "@reduxjs/toolkit";
// import { fetchUserData, login, signOut, register } from "src/thunks/product";
import { fetchUserData, loginThunk, registerThunk } from "src/thunks/product";
interface AuthState {
  token: string | null;
  loading: boolean;
  userData: any;
  userName: string;
  registerMessage: string;
  loginMessage: string;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  userData: {},
  userName: "",
  registerMessage: "",
  loginMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetRegisterMessage(state) {
      state.registerMessage = "";
    },
    resetLoginMessage(state) {
      state.loginMessage = "";
    },
  },
  extraReducers: {
    [signOut.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = {};
      state.token = null;
    },
    [login.pending]: (state, action) => {
      state.loginMessage = "";
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      const { accessToken, user, message, username } = action.payload;
      state.token = accessToken;
      state.loginMessage = message;
      state.userData = user;
      state.userName = username;
      state.loading = false;
    },
    [login.rejected]: (state, action) => {
      state.loginMessage =
        "Login attempt was not successful. Please try again.";
      state.loading = false;
    },
    [register.pending]: (state, action) => {
      state.registerMessage = "";
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      const { message } = action.payload;
      state.registerMessage = message;
      state.loading = false;
    },
    [register.rejected]: (state, action) => {
      state.registerMessage =
        "Register attempt was not successful. Please try again.";
      state.loading = false;
    },
    [fetchUserData.pending]: (state, action) => {
      state.userName = "";
      state.loading = true;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      const { username } = action.payload;
      state.userName = username;
      state.loading = false;
    },
    [fetchUserData.rejected]: (state, action) => {
      state.loading = false;
      state.userName = "";
    },
  },
});

export const { resetRegisterMessage, resetLoginMessage } = authSlice.actions;

export default authSlice.reducer;
