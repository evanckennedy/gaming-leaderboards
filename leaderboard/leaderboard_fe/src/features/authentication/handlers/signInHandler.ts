import { FormikHelpers } from "formik";
import { SignInFormValues } from "../components/SignInForm";

export const handleSubmit = async (
  values: SignInFormValues,
  { setErrors }: FormikHelpers<SignInFormValues>,
) => {
  console.log("form submitting"); // debugging

  try {
    // Simulate an API call using a Promise
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted: ", values); // debugging
    // Add your actual form submission logic here
  } catch (error) {
    // Handle error response
    setErrors({ email: "An error occurred. Please try again." });
    // Formik will automatically set isSubmitting to false
  }
};
