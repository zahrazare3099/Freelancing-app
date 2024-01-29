import { useEffect } from "react";
import useAuthorise from "../Features/Authentication/useAuthorise";
import { useNavigate } from "react-router-dom";
import Pending from "./Pending";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isAuthorized, loadingUser } = useAuthorise();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !loadingUser) {
      navigate("/auth");
    }

    if (!isAuthorized && !loadingUser) {
      navigate("/not-access", { replace: true });
    }
  }, [isAuthenticated, isAuthorized, loadingUser]);

  if (loadingUser)
    return (
      <div className="bg-secondary-0 flex justify-center items-center">
        <Pending />
      </div>
    );
  return <>{children}</>;
}
