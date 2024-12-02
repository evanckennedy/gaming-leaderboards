import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .transform((value) => value.trim())
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string().required("Required"),
});
