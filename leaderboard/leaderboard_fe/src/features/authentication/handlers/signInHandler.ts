import { FormikHelpers } from "formik";
import { SignInFormValues } from "../components/SignInForm";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "@/types/types";
import { setCredentials } from "../slices/userSlice";
import { store } from "@/store/store";
import { signInUser } from "@/services/userService";

export const handleSubmit = async (
  values: SignInFormValues,
  { setErrors, resetForm }: FormikHelpers<SignInFormValues>,
) => {
  try {
    // Trim the email before submitting
    const trimmedValues = {
      email: values.email.trim(),
      password: values.password,
    };

    const response = await signInUser(trimmedValues);

    const { token, user } = response.data;

    // Store the token in local storage
    localStorage.setItem("token", token);

    // Decode the token
    const decodedToken = jwtDecode<DecodedToken>(token);

    console.log(decodedToken); // debugging

    const dispatch = store.dispatch;

    dispatch(
      setCredentials({
        userId: decodedToken.userId,
        roleName: decodedToken.roleName,
        tokenExpiry: decodedToken.exp,
      }),
    );

    resetForm();
  } catch (error) {
    // Handle error response
    setErrors({ email: "An error occurred. Please try again." });
    // Formik will automatically set isSubmitting to false
  }
};
