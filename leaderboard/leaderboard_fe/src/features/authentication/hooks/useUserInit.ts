import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/userSlice";
import { setLogoutTimer } from "@/utils/authUtils";
import { RootState } from "@/store/store";

/**
 * Custom hook to initialize user authentication status and set logout timer.
 *
 * This hook does the following:
 * - Checks if the user is logged in and if the token expiry time is available.
 * - Calculates the remaining time until the token expires.
 * - Sets a logout timer based on the remaining time.
 * - If the token has already expired, it dispatches a logout action.
 * - If the token expiry time is missing but the user is logged in, it logs out
 *   the user (for security).
 *
 * This ensures that the user's authentication state is consistent with the
 * token's validity and handles automatic logout when the token expires.
 */
const useUserInit = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, tokenExpiry } = useSelector(
    (state: RootState) => state.user,
  );

  useEffect(() => {
    if (isLoggedIn && tokenExpiry) {
      const currentTime = Date.now() / 1000; // Current time in seconds
      const timeLeft = (tokenExpiry - currentTime) * 1000; // Convert to milliseconds

      if (timeLeft > 0) {
        setLogoutTimer(timeLeft, dispatch);
      } else {
        // Token has expired
        dispatch(logout());
      }
    } else if (isLoggedIn && !tokenExpiry) {
      dispatch(logout());
    }
  }, [dispatch, isLoggedIn, tokenExpiry]);
};

export default useUserInit;
