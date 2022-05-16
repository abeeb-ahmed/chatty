import { createSlice } from "@reduxjs/toolkit";

const followingSlice = createSlice({
  name: "following",
  initialState: {
    isFollowing: false,
    error: null,
  },
  reducers: {
    follow: (state) => {
      state.isFollowing = true;
      state.error = null;
    },
    unfollow: (state) => {
      state.isFollowing = false;
      state.error = null;
    },
    failed: (state, action) => {
      state.isFollowing = false;
      state.error = action.payload;
    },
  },
});

export const { follow, unfollow, failed } = followingSlice.actions;
export default followingSlice.reducer;
