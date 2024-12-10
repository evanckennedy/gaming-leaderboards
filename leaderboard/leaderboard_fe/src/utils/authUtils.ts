import { Dispatch } from "@reduxjs/toolkit";
import { logout } from "@/features/authentication/slices/userSlice";

let logoutTimerId: ReturnType<typeof setTimeout> | null = null;

/**
 * Sets a logout timer based on the time remaining until token expiration.
 *
 * This function does the following:
 * - Clears any existing logout timer to prevent multiple timers from running.
 * - If there is time remaining until the token expires, sets a new timer to
 *   log out the user when the token expires.
 * - If the token has already expired, logs out the user immediately.
 */
export const setLogoutTimer = (timeUntilLogout: number, dispatch: Dispatch) => {
  if (logoutTimerId) {
    clearTimeout(logoutTimerId);
  }

  if (timeUntilLogout > 0) {
    logoutTimerId = setTimeout(() => {
      dispatch(logout());
    }, timeUntilLogout);
  } else {
    dispatch(logout());
  }
};

/**
 * Clears the logout timer if it exists.
 */
export const clearLogoutTimer = () => {
  if (logoutTimerId) {
    clearTimeout(logoutTimerId);
    logoutTimerId = null;
  }
};
