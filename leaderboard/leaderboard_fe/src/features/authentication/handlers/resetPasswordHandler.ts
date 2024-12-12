import { FormikHelpers } from "formik";
import { ResetPasswordFormValues } from "../components/ResetPasswordForm";

export const handleSubmit = async (
  values: ResetPasswordFormValues,
  { setErrors, resetForm }: FormikHelpers<ResetPasswordFormValues>,
) => {
  try {
    const trimmedValues = {
      email: values.email.trim(),
      password: values.password,
    };

    // simulate api call
    setTimeout(() => {
      console.log("Form submited:", trimmedValues);
    }, 1000);

    resetForm();
    // Maybe redirect the user back to the sign in view upon successful password reset
  } catch (error) {
    // server error. change later
    setErrors({ email: "An error occurred. Please try again." });
  }
};
