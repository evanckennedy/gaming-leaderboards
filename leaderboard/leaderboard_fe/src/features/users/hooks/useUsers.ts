import { useState, useEffect } from "react";
import { fetchUsers, deleteUser } from "@/services/userService";
import { User } from "@/types/types";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedUserId !== null) {
      try {
        await deleteUser(selectedUserId);
        setUsers(users.filter((user) => user.id !== selectedUserId));
      } catch (error) {
        console.error("Error deleting user", error);
      } finally {
        setIsModalOpen(false);
        setSelectedUserId(null);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUserId(null);
  };

  useEffect(() => {
    console.log(users);
  }, [users]); //debugging

  return {
    users,
    isModalOpen,
    handleDeleteClick,
    handleConfirmDelete,
    handleCloseModal,
  };
};
