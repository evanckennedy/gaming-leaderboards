import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  genre: Yup.string().required("Required"),
  players: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Required"),
      score: Yup.string()
        .required("Required")
        .matches(/^\d+$/, "Must be an integer"),
      place: Yup.string()
        .required("Required")
        .matches(/^\d+$/, "Must be an integer"),
    }),
  ),
});
