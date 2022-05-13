import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { email: null, password: null },
    isLoading: false,
    error: null,
  },
  reducers: {
    start: (state) => {
      state.user = { email: null, password: null };
      state.isLoading = true;
      state.error = null;
    },
    success: (state, action) => {
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
      state.isLoading = false;
      state.error = null;
    },
    failure: (state, action) => {
      state.user = { email: null, password: null };
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { start, success, failure } = authSlice.actions;
export default authSlice.reducer;
