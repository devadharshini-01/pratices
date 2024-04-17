import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const val=localStorage.getItem("userType")
  return val ? <Outlet /> : <Navigate to="/" />;
};
