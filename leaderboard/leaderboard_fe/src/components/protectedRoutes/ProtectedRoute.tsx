import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface ProtectedRouteProps {
  allowedRoles: string[];
  element: React.ReactElement;
}

/**
 * A component that protects routes based on user authentication and authorization.
 *
 * This component performs the following checks:
 * - If the user is not logged in, it redirects to the sign-in page.
 * - If the user is logged in but does not have the required role, it redirects
 *   to the "Not Authorized" page.
 * - If the user is logged in and has the required role, it renders the
 *   specified element.
 */
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
