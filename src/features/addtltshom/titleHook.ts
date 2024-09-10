/* eslint-disable @typescript-eslint/no-explicit-any */
import { addServiceAPI, addTitleAPI, deleteService } from "@/services/apiLogin";
import { ADDED_TITLE, DELETED_SERVICE, ERROR_MSSG } from "@/utils/appConstants";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useAddTitle() {
  const navigate = useNavigate();
  const {
    isError,
    mutate: addTitle,
    isSuccess,
    error,
    isPending,
  } = useMutation({
    mutationFn: async (data: any) => {
      return await addTitleAPI(data);
    },

    onSuccess: (res: any) => {
      if (res.status?.code === 201 && res.status?.apiStatus === "SUCCESS") {
        toast.success(ADDED_TITLE);
      } else {
        toast.error(res.status?.apiStatusMessage || ERROR_MSSG);
        navigate("/login");
      }
    },
    onError: (err: any) => {
      toast.error(err.error?.message || ERROR_MSSG);
      navigate("/login");
    },
  });

  return { isError, addTitle, isSuccess, error, isPending };
}

export function useAddService() {
  const navigate = useNavigate();
  const {
    isError,
    mutate: addService,
    isSuccess,
    error,
    isPending,
  } = useMutation({
    mutationFn: (data: any) => addServiceAPI(data),

    onSuccess: (res: any) => {
      if (res.status?.code === 200 && res.status?.apiStatus === "SUCCESS") {
        toast.success(ADDED_TITLE);
      } else {
        toast.error(res.status?.apiStatusMessage || ERROR_MSSG);
        navigate("/login");
      }
    },
    onError: (err: any) => {
      toast.error(err.error?.message || ERROR_MSSG);
      navigate("/login");
    },
  });

  return { isError, addService, isSuccess, error, isPending };
}

export function useDeleteSer() {
  const navigate = useNavigate();
  const {
    isError,
    mutate: deleteSer,
    isSuccess,
    error,
    isPending,
  } = useMutation({
    mutationFn: (data: { _id: string }) => deleteService(data),
    onSuccess: (res: any) => {
      if (res.status?.code === 200 && res.status?.apiStatus === "DELETED") {
        toast.success(DELETED_SERVICE);
      } else {
        toast.error(res.status?.apiStatusMessage || ERROR_MSSG);
        navigate("/login");
      }
    },
    onError: (err: any) => {
      toast.error(err.error?.message || ERROR_MSSG);
      navigate("/login");
    },
  });
  return { isError, deleteSer, isSuccess, error, isPending };
}
