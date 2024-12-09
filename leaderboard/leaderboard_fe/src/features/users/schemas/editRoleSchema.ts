import * as Yup from "yup";

export const validationSchema = Yup.object({
  roleName: Yup.string().required("Required"),
});
