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

export const apiGenreUpdate = async (params: Genre.Data): Promise<Genre.Data> => {
  try {
    const { data } = await ApiService(true).put<Genre.Data>("/genres", params);
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};

export const apiGenreDelete = async (id: number): Promise<number> => {
  try {
    const { data } = await ApiService(true).delete<number>(`/genres/${id}`);
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};

export const apiGenreCreate = async (params: Genre.New.Data): Promise<Genre.Data> => {
  try {
    const { data } = await ApiService(true).post<Genre.Data>("/genres", params);
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};
