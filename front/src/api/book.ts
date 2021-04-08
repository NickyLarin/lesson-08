import { ApiService } from "../services/ApiService";
import { App } from "../types/app";
import { AxiosError } from "axios";
import { Book } from "../types/book";

export const apiBookGetAll = async (): Promise<Book.Data[]> => {
  try {
    const { data } = await ApiService(true).get<Book.Data[]>("/books");
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};
