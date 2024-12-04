import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userId: string | null;
  roleName: string | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  userId: null,
  roleName: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials(
      state,
      action: PayloadAction<{ userId: string; roleName: string }>,
    ) {
      state.userId = action.payload.userId;
      state.roleName = action.payload.roleName;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.userId = null;
      state.roleName = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, logout } = userSlice.actions;
export default userSlice.reducer;
