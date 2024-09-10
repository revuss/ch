import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

export const CheckRoute = ({ children }: { children: ReactNode }) => {
  const { state } = useAuth();

  if (state.isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};
