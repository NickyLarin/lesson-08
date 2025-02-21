import { ApiService } from "../services/ApiService";
import { App } from "../types/app";
import { AxiosError } from "axios";
import { User } from "../types/user";

export const apiUserCreate = async (params: User.Create.Params): Promise<User.Data> => {
  try {
    const { data } = await ApiService().post<User.Data>("/users/create", params);
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};
