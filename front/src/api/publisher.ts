import { ApiService } from "../services/ApiService";
import { App } from "../types/app";
import { AxiosError } from "axios";
import { Publisher } from "../types/publisher";

export const apiPublisherGetAll = async (): Promise<Publisher.Data[]> => {
  try {
    const { data } = await ApiService(true).get<Publisher.Data[]>("/publishers");
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};
