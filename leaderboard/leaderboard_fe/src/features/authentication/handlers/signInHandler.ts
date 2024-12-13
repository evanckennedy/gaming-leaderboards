import { FormikHelpers } from "formik";
import { SignInFormValues } from "../components/SignInForm";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "@/types/types";
import { setCredentials } from "../slices/userSlice";
import { store } from "@/store/store";
import { signInUser } from "@/services/userService";
import axios from "axios";

export const handleSubmit = async (
  values: SignInFormValues,
  formikHelpers: FormikHelpers<SignInFormValues>,
) => {
  try {
    const trimmedValues = {
      email: values.email.trim(),
      password: values.password,
    };

    const response = await signInUser(trimmedValues);
    const { token } = response.data;

    // Store the token in local storage
    localStorage.setItem("token", token);

    // Decode the token
    const decodedToken = jwtDecode<DecodedToken>(token);

    const dispatch = store.dispatch;
    dispatch(
      setCredentials({
        userId: decodedToken.userId,
        roleName: decodedToken.roleName,
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        tokenExpiry: decodedToken.exp,
      }),
    );

    // Clear any previous form status
    formikHelpers.setStatus(undefined);
    formikHelpers.resetForm();
  } catch (error) {
    // Extract error message from the server response
    let errorMessage = "An error occurred. Please try again.";
    if (axios.isAxiosError(error) && error.response) {
      errorMessage = error.response.data.error || errorMessage;
    }

    // Set the error message in Formik's status
    formikHelpers.setStatus(errorMessage);
  }
};
