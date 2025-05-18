import { Navigate } from "react-router-dom";
import useAuthStore from "../Auth/AuthStore";

const ProtectedAdminRoute = ({ children }) => {
  const { user, profile } = useAuthStore();

  if (!user || profile?.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedAdminRoute;
