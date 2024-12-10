import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clearLogoutTimer } from "@/utils/authUtils";

interface UserState {
  userId: number | null;
  roleName: string | null;
  isLoggedIn: boolean;
  tokenExpiry: number | null;
}

const initialState: UserState = {
  userId: null,
  roleName: null,
  isLoggedIn: false,
  tokenExpiry: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials(
      state,
      action: PayloadAction<{
        userId: number;
        roleName: string;
        tokenExpiry: number;
      }>,
    ) {
      state.userId = action.payload.userId;
      state.roleName = action.payload.roleName;
      state.isLoggedIn = true;
      state.tokenExpiry = action.payload.tokenExpiry;
    },
    logout() {
      // Clear the logout timer
      clearLogoutTimer();

      // Remove token from local storage
      localStorage.removeItem("token");

      // Reset state to initial values
      return initialState;
    },
  },
});

export const { setCredentials, logout } = userSlice.actions;
export default userSlice.reducer;
