import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string().required("Required"),
});