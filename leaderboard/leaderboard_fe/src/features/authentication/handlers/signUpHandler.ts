import { FormikHelpers } from "formik";
import { SignUpFormValues } from "../components/SignUpForm";

export const handleSubmit = async (
  values: SignUpFormValues,
  { setErrors, resetForm }: FormikHelpers<SignUpFormValues>,
) => {
  console.log("form submitting"); // debugging

  try {
    // Simulate an API call using a Promise
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted: ", values); // debugging
    // Add your actual form submission logic here

    resetForm();
  } catch (error) {
    // Handle error response
    setErrors({ firstName: "An error occurred. Please try again." });
    // Formik will automatically set isSubmitting to false
  }
};
