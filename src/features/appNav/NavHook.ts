/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getallMenu,
  getallServices,
  getallTitles,
  getByDoc,
} from "@/services/apiMenu";
import { ERROR_MSSG } from "@/utils/appConstants";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export function useGetAllHeaders() {
  const {
    data: headersData,
    isError,
    isSuccess,
    error,
    isLoading: gettingData,
  } = useQuery({
    queryKey: ["Headers"],
    queryFn: getallMenu,
  });

  return {
    headersData,
    isError,
    isSuccess,
    error,
    gettingData,
  };
}

export function useGetAllServices() {
  const {
    data: serviceData,
    isError: noServices,
    isSuccess: serviceSuccesss,
    isLoading: gettingServices,
    error: ServiceErrors,
    refetch,
  } = useQuery({ queryKey: ["services"], queryFn: getallServices });
  return {
    serviceData,
    noServices,
    gettingServices,
    serviceSuccesss,
    ServiceErrors,
    refetch,
  };
}

export function useGetAllTitles() {
  const {
    data: gettitles,
    isError,
    isSuccess,
    isLoading: gettingtitles,
    error: notitles,
  } = useQuery({ queryKey: ["titles"], queryFn: getallTitles });
  return { gettitles, gettingtitles, isError, isSuccess, notitles };
}

export function useGetDoc() {
  const {
    data,
    isError,
    mutate: getDoc,
    isSuccess,
    error,
    isPending: gettingDoc,
  } = useMutation({
    mutationFn: (DocID: string) => getByDoc(DocID),

    onSuccess: (res: any) => {
      if (res.status?.code === 200 && res.status?.apiStatus === "LOGGED_IN") {
        toast.success("datafetched");
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
    gettingDoc,
    getDoc,
    isSuccess,
  };
}
