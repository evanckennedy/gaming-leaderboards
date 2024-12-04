import { FormikHelpers } from "formik";
import { SignInFormValues } from "../components/SignInForm";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "@/types/types";
import { setCredentials } from "../slices/userSlice";
import { store } from "@/store/store";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8234";

export const handleSubmit = async (
  values: SignInFormValues,
  { setErrors, resetForm }: FormikHelpers<SignInFormValues>,
) => {
  console.log("form submitting"); // debugging

  try {
    // Trim the email before submitting
    const trimmedValues = {
      email: values.email.trim(),
      password: values.password,
    };

    const response = await axios.post(
      `${apiBaseUrl}/api/users/signin`,
      trimmedValues,
    );

    console.log("Form submitted: ", response.data); // debugging

    const { token, user } = response.data;

    // Store the token in local storage
    localStorage.setItem("token", token);

    // Decode the token
    const decodedToken = jwtDecode<DecodedToken>(token);

    console.log(decodedToken); // debugging

    store.dispatch(
      setCredentials({
        userId: decodedToken.userId,
        roleName: decodedToken.roleName,
      }),
    );

    resetForm();
  } catch (error) {
    // Handle error response
    setErrors({ email: "An error occurred. Please try again." });
    // Formik will automatically set isSubmitting to false
  }
};
