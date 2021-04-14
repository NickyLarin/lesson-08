import { useEffect, useState } from "react";
import { apiPublisherCreate, apiPublisherDelete, apiPublisherGetAll, apiPublisherUpdate } from "../api/publisher";
import { Errors } from "../errors/types";
import { Publisher } from "../types/publisher";

interface UsePublishers {
  publishersList: Publisher.Data[];
  loading: boolean;
  error: Errors.APIRequestError;
  setSearch: (search: string) => void;
  updatePublisher: (publisher: Publisher.Data) => void;
  deletePublisher: (id: number) => void;
  createPublisher: (publisher: Publisher.New.Data) => void;
}

export const usePublishers = (lazyLoading: boolean = false, defaultSearch: string = ""): UsePublishers => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Errors.APIRequestError>({ hasError: false, errorInfo: null });
  const [data, setData] = useState<Publisher.Data[]>([]);
  const [search, setSearch] = useState<string>(defaultSearch);

  const getPublishersList = async (params: Publisher.All.Params = {}) => {
    console.log("getPublishersList called");
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
  };

  const updatePublisher = (publisher: Publisher.Data) => {
    async function makeUpdateRequest() {
      setLoading(true);
      try {
        await apiPublisherUpdate(publisher);
        await getPublishersList();
      } catch (err) {
        setError({ hasError: true, errorInfo: err });
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    makeUpdateRequest();
  };

  const deletePublisher = (id: number) => {
    async function makeDeleteRequest() {
      setLoading(true);
      try {
        await apiPublisherDelete(id);
        await getPublishersList();
      } catch (err) {
        setError({ hasError: true, errorInfo: err });
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    makeDeleteRequest();
  };

  const createPublisher = (newPublisher: Publisher.New.Data) => {
    async function makeCreateRequest() {
      setLoading(true);
      try {
        await apiPublisherCreate(newPublisher);
        await getPublishersList();
      } catch (err) {
        setError({ hasError: true, errorInfo: err });
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    makeCreateRequest();
  };

  useEffect(() => {
    if (lazyLoading) return;
    const params: Publisher.All.Params = {};
    if (search) {
      params.search = search;
    }
    getPublishersList(params);
  }, [search]);

  return {
    publishersList: data,
    loading,
    error,
    setSearch,
    updatePublisher,
    deletePublisher,
    createPublisher,
  };
};
