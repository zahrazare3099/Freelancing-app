import { useLocation } from "react-router-dom";
import useUser from "../../hooks/useUser";

export default function useAuthorise() {
  const { user, loadingUser } = useUser();

  const isAuthenticated = false;
  if (user) {
    isAuthenticated = true;
  }
  const isAuthorized = false;

  const { pathname } = useLocation();

  const desiredRole = pathname.split("/").at(1);

  const Roles = { admin: "ADMIN", freelancer: "FREELANCER", owner: "OWNER" };

  if (Object.entries(Roles).includes(desiredRole)) {
    if (user && user.role == Roles[desiredRole]) return (isAuthorized = true);
  }

  return { isAuthenticated, isAuthorized, loadingUser };
}
