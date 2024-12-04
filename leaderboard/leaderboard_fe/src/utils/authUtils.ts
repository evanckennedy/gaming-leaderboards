import { Dispatch } from "@reduxjs/toolkit";
import { logout } from "@/features/authentication/slices/userSlice";

let logoutTimerId: number | null = null;

/**
 * Sets a logout timer based on the token's expiration time.
 *
 * Calculates the remaining time until the token expires and sets a timeout
 * to automatically log the user out when the token expires. If the token has
 * already expired or if the expiration time is invalid, it immediately logs
 * the user out.
 * It also handles clearing any existing timer before setting a new one.
 */
export const setLogoutTimer = (expiration: number, dispatch: Dispatch) => {
  // Clear any existing timer
  if (logoutTimerId) {
    clearTimeout(logoutTimerId);
  }

  // Input validation for expiration
  if (typeof expiration !== "number" || isNaN(expiration)) {
    console.error("Invalid expiration time:", expiration);
    localStorage.removeItem("token");
    dispatch(logout());
    return;
  }

  const currentTime = Date.now() / 1000; // Current time in seconds

  if (expiration > currentTime) {
    const remainingTime = (expiration - currentTime) * 1000;

    logoutTimerId = setTimeout(() => {
      console.log("Token expired. Logging out..."); // debugging
      localStorage.removeItem("token");
      dispatch(logout());
    }, remainingTime);
  } else {
    // Token has already expired
    localStorage.removeItem("token");
    dispatch(logout());
  }
};

/**
 * Clears logout timer if it exists
 *
 * This function should be called when the user clicks a logout button
 */
export const clearLogoutTimer = () => {
  if (logoutTimerId) {
    clearTimeout(logoutTimerId);
    logoutTimerId = null;
  }
};
