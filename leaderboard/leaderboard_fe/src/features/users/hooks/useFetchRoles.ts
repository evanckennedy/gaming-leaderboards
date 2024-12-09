import { useEffect, useState } from "react";
import { fetchRoles } from "@/services/roleService";
import { Role } from "@/types/types";

export const useFetchRoles = () => {
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    const getRoles = async () => {
      try {
        const data = await fetchRoles();
        setRoles(data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    getRoles();
  }, []);

  return roles;
};
