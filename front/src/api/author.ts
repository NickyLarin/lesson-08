import { ApiService } from "../services/ApiService";
import { App } from "../types/app";
import { Author } from "../types/author";
import { AxiosError } from "axios";

export const apiAuthorGetAll = async (): Promise<Author.Data[]> => {
  try {
    const { data } = await ApiService(true).get<Author.Data[]>("/authors");
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};
