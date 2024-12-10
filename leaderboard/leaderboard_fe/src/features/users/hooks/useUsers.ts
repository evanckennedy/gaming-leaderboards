import { useState, useEffect } from "react";
import {
  fetchUsers,
  deleteUser,
  resetPassword,
  editRole,
} from "@/services/userService";
import { User } from "@/types/types";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isEditRoleModalOpen, setIsEditRoleModalOpen] = useState(false);
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

  const handleEditRoleClick = (userId: number) => {
    setSelectedUserId(userId);
    setIsEditRoleModalOpen(true);
  };

  const handleConfirmEditRole = async (roleId: number, roleName: string) => {
    if (selectedUserId !== null) {
      try {
        await editRole(selectedUserId, roleId);
        const updatedUsers = users.map((user) =>
          user.id === selectedUserId ?
            { ...user, roleId, role: { roleName } }
          : user,
        );
        setUsers(updatedUsers);
      } catch (error) {
        console.error("Error editing role", error);
      } finally {
        setIsEditRoleModalOpen(false);
        setSelectedUserId(null);
      }
    }
  };

  const handleCloseEditRoleModal = () => {
    setSelectedUserId(null);
    setIsEditRoleModalOpen(false);
  };

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
    isEditRoleModalOpen,
    handleEditRoleClick,
    handleConfirmEditRole,
    handleCloseEditRoleModal,
  };
};
