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
    signOut: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
    followUser: (state, action) => {
      state.user = {
        ...state.user,
        followings: [...state.user.followings, action.payload],
      };
      state.isLoading = false;
      state.error = null;
    },
    unfollowUser: (state, action) => {
      state.user = {
        ...state.user,
        followings: state.user.followings.filter(
          (following) => following !== action.payload
        ),
      };
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { start, success, failure, signOut, followUser, unfollowUser } =
  authSlice.actions;
export default authSlice.reducer;
