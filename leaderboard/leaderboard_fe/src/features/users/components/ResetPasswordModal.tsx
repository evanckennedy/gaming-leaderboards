import { useFormik } from "formik";
import { validationSchema } from "../schemas/resetPasswordSchema";

interface ResetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (newPassword: string) => void;
}

function ResetPasswordModal({
  isOpen,
  onClose,
  onConfirm,
}: ResetPasswordModalProps) {
  if (!isOpen) return null;

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      onConfirm(values.password);
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black-100 bg-opacity-50">
      <div className="h-2/6 w-2/6 bg-gradient-to-b from-primary-300 to-primary-400 py-4 3xl:py-6 4xl:py-12 px-20 3xl:px-32 4xl:px-60">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full h-full flex flex-col justify-between items-center"
        >
          <h3 className="text-white-100 font-black text-xl 3xl:text-3xl 4xl:text-7xl">
            Reset Password
          </h3>
          <div className=" w-full flex flex-col">
            <label
              htmlFor="new-password"
              className="mb-1 3xl:mb-1.5 4xl:mb-3 text-center font-medium text-lg 3xl:text-2xl 4xl:text-6xl uppercase text-white-100"
            >
              New Password
            </label>
            <input
              id="new-password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`text-center bg-primary-200 text-white-100 3xl:text-2xl 4xl:text-5xl border-2 3xl:border-4 4xl:border-8 font-medium shadow-inner-custom-base 3xl:shadow-inner-custom-1080 4xl:shadow-inner-custom-4k hover:bg-primary-100 focus:bg-primary-100 transition-colors duration-300 ease-out h-10 3xl:h-14 4xl:h-28 ${
                formik.touched.password && formik.errors.password ?
                  "border-error-100"
                : ""
              }`}
            />
            <p className="text-right text-sm 3xl:text-xl 4xl:text-4xl text-error-100 h-4 3xl:h-6 4xl:h-12">
              {formik.touched.password && formik.errors.password ?
                formik.errors.password
              : ""}
            </p>
          </div>
          <div className="w-full flex justify-between text-lg 3xl:text-2xl 4xl:text-6xl font-bold">
            <button
              type="button"
              className="text-white-100 font-black hover:text-secondary transition-colors duration-300 ease-out"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-secondary font-black border-secondary border-2 3xl:border-4 4xl:border-8 p-2 3xl:p-3 4xl:p-6"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordModal;
