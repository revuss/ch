/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4200";
// axios.defaults.baseURL = "https://documentationsiteservicesapi.vercel.app";

export async function getRequest(api: string, queryString: string = "") {
  try {
    const url = queryString ? `${api}?${queryString}` : api;
    const response = await axios.get(url, { withCredentials: true });
    return response.data;
  } catch (err: any) {
    if (err.response && err.response.status < 400) {
      throw err.response?.data;
    } else {
      throw err.response?.data;
    }
  }
}

export async function postRequest(api: string, data: any) {
  try {
    const response = await axios.post(api, data, { withCredentials: true });
    return response.data;
  } catch (err: any) {
    if (err.response && err.response.status < 400) {
      console.error("Error in API call:", err.response.data);
      throw err.response?.data;
    } else {
      console.error("Error in API call:", err.response.data);
      throw err.response?.data;
    }
  }
}

export async function deleteRequest(api: string, data: any = {}) {
  try {
    const response = await axios.delete(api, {
      data,
      withCredentials: true,
    });
    return response.data;
  } catch (err: any) {
    if (err.response && err.response.status < 400) {
      console.error("Error in API call:", err.response.data);
      throw err.response?.data;
    } else {
      console.error("Error in API call:", err.response.data);
      throw err.response?.data;
    }
  }
}
