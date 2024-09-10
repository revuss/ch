/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "@/context/authContext";
import { loginAPI, logoutAPI, verifyUserAPI } from "@/services/apiLogin";
import { ERROR_MSSG, SUCCESS_LOGIN } from "@/utils/appConstants";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useUserLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    data,
    isError,
    mutate: getUser,
    isSuccess,
    error,
    isPending: gettingUser,
  } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginAPI({ email, password }),

    onSuccess: (res: any) => {
      if (res.status?.code === 200 && res.status?.apiStatus === "LOGGED_IN") {
        const { userInfo } = res;
        login(userInfo);
        toast.success(SUCCESS_LOGIN, userInfo.username);
        navigate("/");
      } else {
        toast.error(res.status?.apiStatusMessage || ERROR_MSSG);
      }
    },
    onError: (err: any) => {
      toast.error(err.error?.message || ERROR_MSSG);
    },
  });

  return {
    data,
    isError,
    error,
    gettingUser,
    getUser,
    isSuccess,
  };
}

export function useUserLogout() {
  const { logout } = useAuth();

  const {
    mutate: handleLogout,
    isError,
    isSuccess,
    isPending,
    error,
  } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: (res: any) => {
      if (res.status?.code === 200 && res.status?.apiStatus === "LOGGED_OUT") {
        logout();
        toast.success("Successfully logged out");
      } else {
        toast.error(res.status?.apiStatusMessage || "Failed to log out");
      }
    },
    onError: (err: any) => {
      toast.error(err.error?.message || "Failed to log out");
    },
  });

  return {
    handleLogout,
    isError,
    isSuccess,
    isPending,
    error,
  };
}

export function useVerifyUser() {
  const { login } = useAuth();

  const {
    mutate: verifyUser,
    data,
    isError,
    isSuccess,
    isPending: verifyingUser,
    error,
    mutateAsync: refech,
  } = useMutation({
    mutationFn: verifyUserAPI,
    onSuccess: (res: any) => {
      if (res.status?.code === 200 && res.status?.apiStatus === "SUCCESS") {
        console.log(res);
        login(res.user);
      } else {
        console.log(res);
        toast.error(res.status?.apiStatusMessage || "Verification failed");
      }
    },
    onError: (err: any) => {
      toast.error(err.message || "Verification failed");
    },
  });

  return {
    data,
    isError,
    error,
    verifyingUser,
    verifyUser,
    isSuccess,
    refech,
  };
}
