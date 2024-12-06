import IconEdit from "@/components/ui/icons/IconEdit";
import IconResetPassword from "@/components/ui/icons/IconResetPassword";
import IconTrash from "@/components/ui/icons/IconTrash";
import { useUsers } from "../hooks/useUsers";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import ResetPasswordModal from "./ResetPasswordModal";

function UsersView() {
  const {
    users,
    isDeleteModalOpen,
    handleDeleteClick,
    handleConfirmDelete,
    handleCloseDeleteModal,
    isResetModalOpen,
    handleResetClick,
    handleConfirmReset,
    handleCloseResetModal,
  } = useUsers();

  return (
    <div className="mt-16 3xl:mt-24 4xl:mt-48">
      <table className="w-full text-left">
        <thead>
          <tr className="uppercase text-white-100 *:font-black text-xl 3xl:text-3xl 4xl:text-6xl *:pb-3 3xl:*:pb-5 4xl:*:pb-9">
            <th>User</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="*:py-1.5 3xl:*:py-2.5 4xl:*:py-5 3xl:text-2xl 4xl:text-5xl text-white-100 odd:bg-primary-100 even:bg-primary-200"
            >
              <td className="pl-4 3xl:pl-6 4xl:pl-12 font-medium">
                <span>{user.firstName} </span>
                <span>{user.lastName}</span>
              </td>
              <td className="font-medium">{user.email}</td>
              <td className="font-medium">*************</td>
              <td className="font-medium">{user.role.roleName}</td>
              <td>
                <div className="flex gap-5 3xl:gap-8 4xl:gap-16">
                  <button
                    type="button"
                    disabled={user.role.roleName === "Root"}
                  >
                    <IconEdit
                      className={`w-auto h-5 3xl:h-8 4xl:h-16 fill-current ${
                        user.role.roleName === "Root" ?
                          "text-gray-400 cursor-not-allowed"
                        : "text-white-100 hover:text-secondary transition-colors duration-300 ease-out"
                      }`}
                    />
                  </button>
                  <button
                    type="button"
                    disabled={user.role.roleName === "Root"}
                    onClick={() => handleResetClick(user.id)}
                  >
                    <IconResetPassword
                      className={`w-auto h-5 3xl:h-8 4xl:h-16 fill-current ${
                        user.role.roleName === "Root" ?
                          "text-gray-400 cursor-not-allowed"
                        : "text-white-100 hover:text-secondary transition-colors duration-300 ease-out"
                      }`}
                    />
                  </button>
                  <button
                    type="button"
                    disabled={user.role.roleName === "Root"}
                    onClick={() => handleDeleteClick(user.id)}
                  >
                    <IconTrash
                      className={`w-auto h-5 3xl:h-8 4xl:h-16 fill-current ${
                        user.role.roleName === "Root" ?
                          "text-gray-400 cursor-not-allowed"
                        : "text-white-100 hover:text-error-100 transition-colors duration-300 ease-out"
                      }`}
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modals */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
      <ResetPasswordModal
        isOpen={isResetModalOpen}
        onClose={handleCloseResetModal}
        onConfirm={handleConfirmReset}
      />
    </div>
  );
}

export default UsersView;
