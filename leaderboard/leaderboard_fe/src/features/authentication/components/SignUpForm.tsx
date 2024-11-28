import { Formik, Form, Field } from "formik";
import { validationSchema } from "../schemas/signUpSchema";
import { handleSubmit } from "../handlers/signUpHandler";

export interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function SignUpForm() {
  return (
    <div className="w-full flex justify-center mt-16 3xl:mt-24 4xl:mt-48">
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className="w-1/2">
            <div className="flex justify-between gap-8 3xl:gap-12 4xl:gap-24">
              <div className="w-full flex flex-col mb-4 3xl:mb-6 4xl:mb-12">
                <label
                  htmlFor="first-name"
                  className="mb-4 3xl:mb-6 4xl:mb-12 text-center text-xl 3xl:text-3xl 4xl:text-6xl uppercase font-black text-white-100"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  name="firstName"
                  id="first-name"
                  className={`text-center bg-primary-200 text-white-100 3xl:text-2xl 4xl:text-5xl border-2 3xl:border-4 4xl:border-8 font-medium shadow-inner-custom-base 3xl:shadow-inner-custom-1080 4xl:shadow-inner-custom-4k hover:bg-primary-100 focus:bg-primary-100 transition-colors duration-300 ease-out h-10 3xl:h-14 4xl:h-28 ${
                    touched.firstName && errors.firstName ?
                      "border-error-100"
                    : ""
                  }`}
                />
                <p className="text-right text-sm 3xl:text-xl 4xl:text-4xl text-error-100 h-4 3xl:h-6 4xl:h-12">
                  {touched.firstName && errors.firstName ?
                    errors.firstName
                  : ""}
                </p>
              </div>
              <div className="w-full flex flex-col mb-4 3xl:mb-6 4xl:mb-12">
                <label
                  htmlFor="last-name"
                  className="mb-4 3xl:mb-6 4xl:mb-12 text-center text-xl 3xl:text-3xl 4xl:text-6xl uppercase font-black text-white-100"
                >
                  Last Name
                </label>
                <Field
                  type="text"
                  name="lastName"
                  id="last-name"
                  className={`text-center bg-primary-200 text-white-100 3xl:text-2xl 4xl:text-5xl border-2 3xl:border-4 4xl:border-8 font-medium shadow-inner-custom-base 3xl:shadow-inner-custom-1080 4xl:shadow-inner-custom-4k hover:bg-primary-100 focus:bg-primary-100 transition-colors duration-300 ease-out h-10 3xl:h-14 4xl:h-28 ${
                    touched.lastName && errors.lastName ?
                      "border-error-100"
                    : ""
                  }`}
                />
                <p className="text-right text-sm 3xl:text-xl 4xl:text-4xl text-error-100 h-4 3xl:h-6 4xl:h-12">
                  {touched.lastName && errors.lastName ? errors.lastName : ""}
                </p>
              </div>
            </div>

            <div className="flex flex-col mb-4 3xl:mb-6 4xl:mb-12">
              <label
                htmlFor="su-email"
                className="mb-4 3xl:mb-6 4xl:mb-12 text-center text-xl 3xl:text-3xl 4xl:text-6xl uppercase font-black text-white-100"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="su-email"
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
                htmlFor="su-password"
                className="mb-4 3xl:mb-6 4xl:mb-12 text-center text-xl 3xl:text-3xl 4xl:text-6xl uppercase font-black text-white-100"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="su-password"
                className={`text-center bg-primary-200 text-white-100 3xl:text-2xl 4xl:text-5xl border-2 3xl:border-4 4xl:border-8 font-medium shadow-inner-custom-base 3xl:shadow-inner-custom-1080 4xl:shadow-inner-custom-4k hover:bg-primary-100 focus:bg-primary-100 transition-colors duration-300 ease-out h-10 3xl:h-14 4xl:h-28 ${
                  touched.password && errors.password ? "border-error-100" : ""
                }`}
              />
              <p className="text-right text-sm 3xl:text-xl 4xl:text-4xl text-error-100 h-4 3xl:h-6 4xl:h-12">
                {touched.password && errors.password ? errors.password : ""}
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`text-3xl 3xl:text-4xl 4xl:text-8xl uppercase font-black text-white-100 hover:text-secondary transition-colors duration-300 ease-out ${
                  isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                Sign Up
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUpForm;
