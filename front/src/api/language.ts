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
