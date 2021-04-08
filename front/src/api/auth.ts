import { ApiService } from "../services/ApiService";
import { App } from "../types/app";
import { Auth } from "../types/auth";
import { AxiosError } from "axios";

export const apiAuthLogin = async (params: Auth.Login.Params): Promise<App.Token> => {
  try {
    const { data } = await ApiService().post<App.Token>("/auth/login", params);
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};

export const apiAuthRefresh = async (params: Auth.Refresh.Params): Promise<App.Token> => {
  try {
    const { data } = await ApiService(true).post<App.Token>("/auth/refresh", params);
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};

// export const apiAuthLogout = async (): Promise<App.Token> => {
//   const { data } = await axios.post<App.Token>('http://localhost:5000/api/v1/auth/refresh', params)
//   return data
// }
