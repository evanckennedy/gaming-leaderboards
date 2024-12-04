import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setCredentials, logout } from "../slices/userSlice";
import { DecodedToken } from "@/types/types";

/**
 * Hook to check if a user is already logged in
 *
 * Checks to see if there is a token in local storage
 * If there is a token in local storage, then check to see if the token is valid
 * If the token is valid, set the user's credentials in the store
 * Otherwise, remove the token from local storage and remove the user's credentials in the store
 */
const useUserInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = jwtDecode<DecodedToken>(token);
      const currentTime = Date.now() / 1000;
      console.log("Token expiration: ", decodedToken.exp); // debugging
      console.log("Current time: ", currentTime); //debugging

      if (decodedToken.exp > currentTime) {
        // Token is valid
        dispatch(
          setCredentials({
            userId: decodedToken.userId,
            roleName: decodedToken.roleName,
          }),
        );
      } else {
        // Token has expired
        localStorage.removeItem("token");
        dispatch(logout());
      }
    }
  }, []);
};

export default useUserInit;
