import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userId: number | null;
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
      action: PayloadAction<{ userId: number; roleName: string }>,
    ) {
      state.userId = action.payload.userId;
      state.roleName = action.payload.roleName;
      state.isLoggedIn = true;
    },
    logout() {
      return initialState;
    },
  },
});

export const { setCredentials, logout } = userSlice.actions;
export default userSlice.reducer;
