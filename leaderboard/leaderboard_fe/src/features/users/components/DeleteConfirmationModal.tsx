interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
}: DeleteConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black-100 bg-opacity-50">
      <div className="flex flex-col justify-between items-center h-2/6  w-2/6 bg-gradient-to-b from-primary-300 to-primary-400 py-4 3xl:py-6 4xl:py-12 px-20 3xl:px-32 4xl:px-60">
        <h2 className="text-white-100 font-black text-xl 3xl:text-3xl 4xl:text-7xl">
          Delete Confirmation
        </h2>
        <p className="text-white-100 text-lg 3xl:text-2xl 4xl:text-6xl text-center">
          Are you sure you want to delete this user?
        </p>
        <div className="w-full flex justify-between text-lg 3xl:text-2xl 4xl:text-6xl font-bold">
          <button
            className="text-white-100 font-black hover:text-secondary transition-colors duration-300 ease-out"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-error-100 font-black border-error-100 border-2 3xl:border-4 4xl:border-8 p-2 3xl:p-3 4xl:p-6"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
