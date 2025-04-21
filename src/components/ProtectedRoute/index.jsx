import { Navigate, useLocation } from "react-router-dom";

import config from "@/config";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const currentUser = useSelector((state) => state.user.currentUser);
  // const { currentUser, isLoading } = useUserContext();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (!currentUser) {
    const path = encodeURIComponent(location.pathname);
    return <Navigate to={`${config.routes.login}?continue=${path}`} />;
  }

  return children;
}

export default ProtectedRoute;
