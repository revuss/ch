import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";
import { useVerifyUser } from "@/features/admin/login/loginHook";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { state } = useAuth();
  const { data, refech } = useVerifyUser();

  useEffect(() => {
    refech();
  }, [refech, data]);

  if (!state.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
