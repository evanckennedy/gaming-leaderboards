import { FormikHelpers } from "formik";
import { SignUpFormValues } from "../components/SignUpForm";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "@/types/types";
import { setCredentials } from "../slices/userSlice";
import { store } from "@/store/store";
import { signUpUser } from "@/services/userService";

export const handleSubmit = async (
  values: SignUpFormValues,
  { setErrors, resetForm }: FormikHelpers<SignUpFormValues>,
) => {
  try {
    // Trim leading and trailing spaces for all inputs except the password
    const trimmedValues = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim(),
      password: values.password,
    };

    const response = await signUpUser(trimmedValues);

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
    setErrors({ firstName: "An error occurred. Please try again." });
    // Formik will automatically set isSubmitting to false
  }
};
