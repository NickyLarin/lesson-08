import { ApiService } from "../services/ApiService";
import { App } from "../types/app";
import { AxiosError } from "axios";
import { Genre } from "../types/genre";

export const apiGenreGetAll = async (): Promise<Genre.Data[]> => {
  try {
    const { data } = await ApiService(true).get<Genre.Data[]>("/genres");
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};
