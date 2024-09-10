/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteRequest, getRequest, postRequest } from "./apiServices";

export function loginAPI(data: { email: string; password: string }) {
  return postRequest("/auth/login", data);
}

export function logoutAPI() {
  return postRequest("/auth/logout", "");
}

export function verifyUserAPI() {
  return getRequest("/auth/verify", "");
}

export function addServiceAPI({ serviceName }: { serviceName: string }) {
  return postRequest("/service/adsrv", { serviceName });
}

export function addTitleAPI(data: any) {
  return postRequest("/title/adtlts", data);
}

export function deleteService(data: { _id: string }) {
  return deleteRequest("/service/dltsrv", data);
}
