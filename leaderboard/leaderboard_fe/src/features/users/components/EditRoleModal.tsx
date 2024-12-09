import { useFetchRoles } from "../hooks/useFetchRoles";
import { useFormik } from "formik";
import { validationSchema } from "../schemas/editRoleSchema";

interface EditRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (roleId: number, roleName: string) => void;
}

function EditRoleModal({ isOpen, onClose, onConfirm }: EditRoleModalProps) {
  const roles = useFetchRoles();

  const formik = useFormik({
    initialValues: {
      roleName: "",
      roleId: 0,
    },
    validationSchema,
    onSubmit: (values) => {
      onConfirm(values.roleId, values.roleName);
    },
  });

  if (!isOpen) return null;

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = roles.find(
      (role) => role.roleName === event.target.value,
    );
    formik.setFieldValue("roleName", event.target.value);
    formik.setFieldValue("roleId", selectedRole ? selectedRole.id : 0);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black-100 bg-opacity-50">
      <div className="h-2/6 w-2/6 bg-gradient-to-b from-primary-300 to-primary-400 py-4 3xl:py-6 4xl:py-12 px-20 3xl:px-32 4xl:px-60">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full h-full flex flex-col justify-between items-center"
        >
          <h3 className="text-white-100 font-black text-xl 3xl:text-3xl 4xl:text-7xl">
            Edit Role
          </h3>
          <div className="w-full flex flex-col">
            <label
              htmlFor="roleName"
              className="mb-1 3xl:mb-1.5 4xl:mb-3 text-center font-medium text-lg 3xl:text-2xl 4xl:text-6xl uppercase text-white-100"
            >
              Role
            </label>
            <select
              id="roleName"
              name="roleName"
              onChange={handleRoleChange}
              onBlur={formik.handleBlur}
              value={formik.values.roleName}
              className={`text-center bg-primary-200 text-white-100 3xl:text-2xl 4xl:text-5xl border-2 3xl:border-4 4xl:border-8 font-medium shadow-inner-custom-base 3xl:shadow-inner-custom-1080 4xl:shadow-inner-custom-4k hover:bg-primary-100 focus:bg-primary-100 transition-colors duration-300 ease-out h-10 3xl:h-14 4xl:h-28 ${
                formik.touched.roleName && formik.errors.roleName ?
                  "border-error-100"
                : ""
              }`}
            >
              <option value="" disabled hidden>
                Select role
              </option>
              {roles.map((role) => (
                <option key={role.id} value={role.roleName}>
                  {role.roleName}
                </option>
              ))}
            </select>
            <p className="text-right text-sm 3xl:text-xl 4xl:text-4xl text-error-100 h-4 3xl:h-6 4xl:h-12">
              {formik.touched.roleName && formik.errors.roleName ?
                formik.errors.roleName
              : ""}
            </p>
          </div>
          <div className="w-full flex justify-between text-lg 3xl:text-2xl 4xl:text-6xl font-bold">
            <button
              type="button"
              onClick={onClose}
              className="text-white-100 font-black hover:text-secondary transition-colors duration-300 ease-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-secondary font-black border-secondary border-2 3xl:border-4 4xl:border-8 p-2 3xl:p-3 4xl:p-6"
            >
              Update Role
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditRoleModal;
