import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface ProtectedRouteProps {
  allowedRoles: string[];
  element: React.ReactElement;
}

function ProtectedRoute({ allowedRoles, element }: ProtectedRouteProps) {
  const { isLoggedIn, roleName } = useSelector(
    (state: RootState) => state.user,
  );

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" />;
  }

  if (!allowedRoles.includes(roleName || "")) {
    return <Navigate to="/not-authorized" />;
  }

  return element;
}

export default ProtectedRoute;
