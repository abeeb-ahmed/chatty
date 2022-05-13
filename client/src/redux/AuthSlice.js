import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    start: (state) => {
      state.user = null;
      state.isLoading = true;
      state.error = null;
    },
    success: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    failure: (state, action) => {
      state.user = null;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { start, success, failure } = authSlice.actions;
export default authSlice.reducer;
