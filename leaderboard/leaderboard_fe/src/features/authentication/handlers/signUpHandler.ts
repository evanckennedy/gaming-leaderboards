import { FormikHelpers } from "formik";
import { SignUpFormValues } from "../components/SignUpForm";
import axios from "axios";

export const handleSubmit = async (
  values: SignUpFormValues,
  { setErrors, resetForm }: FormikHelpers<SignUpFormValues>,
) => {
  console.log("form submitting"); // debugging

  try {
    const response = await axios.post(
      "http://localhost:8234/api/users/signup",
      values,
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
