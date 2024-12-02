import { FormikHelpers } from "formik";
import { SignInFormValues } from "../components/SignInForm";
import axios from "axios";

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
      "http://localhost:8234/api/users/signin",
      trimmedValues,
    );
    const { token, user } = response.data;

    console.log("Form submitted: ", response.data); // debugging

    resetForm();
  } catch (error) {
    // Handle error response
    setErrors({ email: "An error occurred. Please try again." });
    // Formik will automatically set isSubmitting to false
  }
};
