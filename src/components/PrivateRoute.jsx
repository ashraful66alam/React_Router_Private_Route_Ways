import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login"></Navigate>;
}

export default PrivateRoute;
