import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string()
    .transform((value) => value.trim())
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string().required("Required"),
});
