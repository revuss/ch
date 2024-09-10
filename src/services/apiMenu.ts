/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRequest } from "./apiServices";

export async function getallMenu() {
  const response = await getRequest("/document/getapi/heads");
  return response;
}

export async function getallServices() {
  const response = await getRequest("/service/gtasrv");
  return response;
}

export async function getallTitles() {
  const response = await getRequest("/title/atlts");
  return response;
}

export async function getByDoc(DocID: string) {
  const response = await getRequest(`document/gtapi/${DocID}`);
  return response;
}
