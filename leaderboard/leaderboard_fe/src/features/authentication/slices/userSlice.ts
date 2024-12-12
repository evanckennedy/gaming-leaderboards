import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clearLogoutTimer } from "@/utils/authUtils";

interface UserState {
  userId: number | null;
  roleName: string | null;
  firstName: string | null;
  lastName: string | null;
  isLoggedIn: boolean;
  tokenExpiry: number | null;
}

const initialState: UserState = {
  userId: null,
  roleName: null,
  firstName: null,
  lastName: null,
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
        firstName: string;
        lastName: string;
        tokenExpiry: number;
      }>,
    ) {
      state.userId = action.payload.userId;
      state.roleName = action.payload.roleName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
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
