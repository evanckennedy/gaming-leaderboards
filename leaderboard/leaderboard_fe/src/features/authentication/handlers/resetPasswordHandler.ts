import { FormikHelpers } from "formik";
import { ResetPasswordFormValues } from "../components/ResetPasswordForm";
import { resetMyPassword } from "@/services/userService";

export const handleSubmit = async (
  values: ResetPasswordFormValues,
  { setErrors, resetForm }: FormikHelpers<ResetPasswordFormValues>,
) => {
  try {
    const trimmedValues = {
      email: values.email.trim(),
      newPassword: values.password,
    };

    await resetMyPassword(trimmedValues);

    resetForm();
    // Maybe redirect the user back to the sign in view upon successful password reset
  } catch (error) {
    // display this if there's a server error. change later for better UI
    setErrors({ email: "An error occurred. Please try again." });
  }
};
