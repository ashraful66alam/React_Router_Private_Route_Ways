import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateOutlet() {
  const auth = useAuth();

  return (
    <>
      <div>Outlet</div>
      <div>{auth ? <Outlet /> : <Navigate to="/login"></Navigate>}</div>
    </>
  );
}

export default PrivateOutlet;
