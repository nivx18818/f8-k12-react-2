import { Navigate, useLocation } from "react-router-dom";

import useUserContext from "@/hooks/useUserContext";
import config from "@/config";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const { currentUser, isLoading } = useUserContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    const path = encodeURIComponent(location.pathname);
    return <Navigate to={`${config.routes.login}?continue=${path}`} />;
  }

  return children;
}

export default ProtectedRoute;
