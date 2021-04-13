import { useEffect, useState } from "react";
import { apiPublisherGetAll } from "../api/publisher";
import { Errors } from "../errors/types";
import { Publisher } from "../types/publisher";

interface UsePublishers {
  publishersList: Publisher.Data[];
  loading: boolean;
  error: Errors.APIRequestError;
  setSearch: (search: string) => void;
}

export const usePublishers = (defaultSearch: string = ""): UsePublishers => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Errors.APIRequestError>({ hasError: false, errorInfo: null });
  const [data, setData] = useState<Publisher.Data[]>([]);
  const [search, setSearch] = useState<string>(defaultSearch);

  useEffect(() => {
    const params: Publisher.All.Params = {};

    if (search) {
      params.search = search;
    }

    async function getPublishers() {
      setLoading(true);
      try {
        const publishers = await apiPublisherGetAll(params);
        setData(publishers);
      } catch (err) {
        setError({ hasError: true, errorInfo: err });
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    getPublishers();
  }, [search]);

  return {
    publishersList: data,
    loading,
    error,
    setSearch,
  };
};
