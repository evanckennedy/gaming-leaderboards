import { FormikHelpers } from "formik";
import { ResetPasswordFormValues } from "../components/ResetPasswordForm";
import { resetMyPassword } from "@/services/userService";

export const handleSubmit = async (
  values: ResetPasswordFormValues,
  { setErrors, resetForm }: FormikHelpers<ResetPasswordFormValues>,
  onBack: () => void,
) => {
  try {
    const trimmedValues = {
      email: values.email.trim(),
      newPassword: values.password,
    };

    await resetMyPassword(trimmedValues);

    resetForm();
    onBack(); // Go back to sign in view
  } catch (error) {
    // display this if there's a server error. change later for better UI
    setErrors({ email: "An error occurred. Please try again." });
  }
};
