import { Formik, Form, Field } from "formik";
import { validationSchema } from "../schemas/signInSchema";
import { handleSubmit } from "../handlers/signInHandler";
import FormErrorMessage from "@/features/formErrors/components/FormErrorMessage";

export interface SignInFormValues {
  email: string;
  password: string;
}

const SignInForm = () => {
  return (
    <div className="w-full flex justify-center mt-16 3xl:mt-24 4xl:mt-48">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors, status }) => (
          <Form className="w-1/2">
            <div className="flex flex-col mb-4 3xl:mb-6 4xl:mb-12">
              <label
                htmlFor="email"
                className="mb-4 3xl:mb-6 4xl:mb-12 text-center text-xl 3xl:text-3xl 4xl:text-6xl uppercase font-black text-white-100"
              >
                Email
              </label>
              <Field
                type="text"
                name="email"
                id="email"
                className={`text-center bg-primary-200 text-white-100 3xl:text-2xl 4xl:text-5xl border-2 3xl:border-4 4xl:border-8 font-medium shadow-inner-custom-base 3xl:shadow-inner-custom-1080 4xl:shadow-inner-custom-4k hover:bg-primary-100 focus:bg-primary-100 transition-colors duration-300 ease-out h-10 3xl:h-14 4xl:h-28 ${
                  touched.email && errors.email ? "border-error-100" : ""
                }`}
              />
              <p className="text-right text-sm 3xl:text-xl 4xl:text-4xl text-error-100 h-4 3xl:h-6 4xl:h-12">
                {touched.email && errors.email ? errors.email : ""}
              </p>
            </div>
            <div className="flex flex-col mb-4 3xl:mb-6 4xl:mb-12">
              <label
                htmlFor="password"
                className="mb-4 3xl:mb-6 4xl:mb-12 text-center text-xl 3xl:text-3xl 4xl:text-6xl uppercase font-black text-white-100"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className={`text-center bg-primary-200 text-white-100 3xl:text-2xl 4xl:text-5xl border-2 3xl:border-4 4xl:border-8 font-medium shadow-inner-custom-base 3xl:shadow-inner-custom-1080 4xl:shadow-inner-custom-4k hover:bg-primary-100 focus:bg-primary-100 transition-colors duration-300 ease-out h-10 3xl:h-14 4xl:h-28 ${
                  touched.password && errors.password ? "border-error-100" : ""
                }`}
              />
              <p className="text-right text-sm 3xl:text-xl 4xl:text-4xl text-error-100 h-4 3xl:h-6 4xl:h-12">
                {touched.password && errors.password ? errors.password : ""}
              </p>
            </div>
            <div className="relative flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`text-3xl 3xl:text-4xl 4xl:text-8xl uppercase font-black text-white-100 hover:text-secondary transition-colors duration-300 ease-out ${
                  isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                Sign In
              </button>
              {status && <FormErrorMessage message={status} />}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
