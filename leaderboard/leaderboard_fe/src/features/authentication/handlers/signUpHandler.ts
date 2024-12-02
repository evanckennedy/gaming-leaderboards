import { FormikHelpers } from "formik";
import { SignUpFormValues } from "../components/SignUpForm";
import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8234";

export const handleSubmit = async (
  values: SignUpFormValues,
  { setErrors, resetForm }: FormikHelpers<SignUpFormValues>,
) => {
  console.log("form submitting"); // debugging

  try {
    // Trim leading and trailing spaces for all inputs except the password
    const trimmedValues = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim(),
      password: values.password,
    };

    const response = await axios.post(
      `${apiBaseUrl}/api/users/signup`,
      trimmedValues,
    );
    const { token, user } = response.data;

    console.log("Form submitted: ", response.data); // debugging

    resetForm();
  } catch (error) {
    // Handle error response
    setErrors({ firstName: "An error occurred. Please try again." });
    // Formik will automatically set isSubmitting to false
  }
};
