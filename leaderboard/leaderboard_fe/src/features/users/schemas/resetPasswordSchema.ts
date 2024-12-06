import * as Yup from "yup";

export const validationSchema = Yup.object({
  password: Yup.string().required("Required"),
});
