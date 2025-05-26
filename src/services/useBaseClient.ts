import axiosInstance from "@/lib/axios";
import { AxiosRequestConfig } from "axios";

export type BaseRequestConfig = AxiosRequestConfig;

export async function get<T>(
  url: string,
  config?: BaseRequestConfig
): Promise<T> {
  const response = await axiosInstance.get<T>(url, config);
  return response.data;
}

export async function post<T, D = unknown>(
  url: string,
  data: D,
  config?: BaseRequestConfig
): Promise<T> {
  const response = await axiosInstance.post<T>(url, data, config);
  return response.data;
}

export async function put<T, D = unknown>(
  url: string,
  data?: D,
  config?: BaseRequestConfig
): Promise<T> {
  const response = await axiosInstance.put<T>(url, data, config);
  return response.data;
}

export async function del<T>(
  url: string,
  config?: BaseRequestConfig
): Promise<T> {
  const response = await axiosInstance.delete<T>(url, config);
  return response.data;
}
