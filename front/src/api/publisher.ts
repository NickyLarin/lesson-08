import { ApiService } from "../services/ApiService";
import { App } from "../types/app";
import { AxiosError } from "axios";
import { Publisher } from "../types/publisher";

export const apiPublisherGetAll = async (params: Publisher.All.Params): Promise<Publisher.Data[]> => {
  try {
    const { data } = await ApiService(true).get<Publisher.Data[]>("/publishers", { params });
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};

export const apiPublisherUpdate = async (params: Publisher.Data): Promise<Publisher.Data> => {
  try {
    const { data } = await ApiService(true).put<Publisher.Data>("/publishers", params);
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};

export const apiPublisherDelete = async (id: number): Promise<number> => {
  try {
    const { data } = await ApiService(true).delete<number>(`/publishers/${id}`);
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};

export const apiPublisherCreate = async (params: Publisher.New.Data): Promise<Publisher.Data> => {
  try {
    const { data } = await ApiService(true).post<Publisher.Data>("/publishers", params);
    return data;
  } catch (err) {
    const { response } = err as AxiosError<App.ResponseError>;
    throw new Error(response?.data?.errors?.join(" ") || err.message);
  }
};
