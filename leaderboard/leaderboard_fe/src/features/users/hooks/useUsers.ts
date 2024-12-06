import { useState, useEffect } from "react";
import { fetchUsers, deleteUser, resetPassword } from "@/services/userService";
import { User } from "@/types/types";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    getUsers();
  }, []);

  const handleDeleteClick = (userId: number) => {
    setSelectedUserId(userId);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedUserId !== null) {
      try {
        await deleteUser(selectedUserId);
        setUsers(users.filter((user) => user.id !== selectedUserId));
      } catch (error) {
        console.error("Error deleting user", error);
      } finally {
        setIsDeleteModalOpen(false);
        setSelectedUserId(null);
      }
    }
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedUserId(null);
  };

  const handleResetClick = (userId: number) => {
    setSelectedUserId(userId);
    setIsResetModalOpen(true);
  };

  const handleConfirmReset = async (newPassword: string) => {
    if (selectedUserId !== null) {
      try {
        await resetPassword(selectedUserId, newPassword);
      } catch (error) {
        console.error("Error resetting password", error);
      } finally {
        setIsResetModalOpen(false);
        setSelectedUserId(null);
      }
    }
  };

  const handleCloseResetModal = () => {
    setIsResetModalOpen(false);
    setSelectedUserId(null);
  };

  useEffect(() => {
    console.log(users);
  }, [users]); //debugging

  return {
    users,
    isDeleteModalOpen,
    handleDeleteClick,
    handleConfirmDelete,
    handleCloseDeleteModal,
    isResetModalOpen,
    handleResetClick,
    handleConfirmReset,
    handleCloseResetModal,
  };
};
