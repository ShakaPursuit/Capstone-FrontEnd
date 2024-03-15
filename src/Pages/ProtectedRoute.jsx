import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  element: Component,
  isAuthenticated,
  user,
  token,
}) => {
  // console.log(isAuthenticated)
  // console.log("user obj from the protected route",user)
  return isAuthenticated ? (
    <Component user={user} token={token} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
