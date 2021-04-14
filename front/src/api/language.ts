import { ApiService } from "../services/ApiService";
import { App } from "../types/app";
import { AxiosError } from "axios";
import { Language } from "../types/language";

export const apiLanguageGetAll = async (): Promise<Language.Data[]> => {
  try {
    const { data } = await ApiService(true).get<Language.Data[]>("/languages");
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};

export const apiLanguageUpdate = async (params: Language.Data): Promise<Language.Data> => {
  try {
    const { data } = await ApiService(true).put<Language.Data>("/languages", params);
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};

export const apiLanguageDelete = async (id: number): Promise<number> => {
  try {
    const { data } = await ApiService(true).delete<number>(`/languages/${id}`);
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};

export const apiLanguageCreate = async (params: Language.New.Data): Promise<Language.Data> => {
  try {
    const { data } = await ApiService(true).post<Language.Data>("/languages", params);
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};
