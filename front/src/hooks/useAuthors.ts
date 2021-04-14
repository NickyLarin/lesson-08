import { apiAuthorCreate, apiAuthorGetAll, apiAuthorUpdate, apiAuthorDelete } from "../api/author";
import { Author } from "../types/author";
import { Errors } from "../errors/types";
import { useEffect, useState } from "react";
import { browserHistory } from "../browserHistory";

interface UseAuthors {
  authorsList: Author.Data[];
  loading: boolean;
  error: Errors.APIRequestError;
  setSearch: (search: string) => void;
  updateAuthor: (author: Author.Data) => void;
  deleteAuthor: (id: number) => void;
  createAuthor: (author: Author.New.Data) => void;
}

export const useAuthors = (lazyLoading: boolean, defaultSearch: string = ""): UseAuthors => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Errors.APIRequestError>({ hasError: false, errorInfo: null });
  const [data, setData] = useState<Author.Data[]>([]);
  const [search, setSearch] = useState<string>(defaultSearch);

  const getAuthorsList = async (params: Author.All.Params = {}) => {
    setLoading(true);
    try {
      const authors = await apiAuthorGetAll(params);
      setData(authors);
    } catch (err) {
      setError({ hasError: true, errorInfo: err });
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const updateAuthor = (publisher: Author.Data) => {
    async function makeUpdateRequest() {
      setLoading(true);
      try {
        await apiAuthorUpdate(publisher);
        await getAuthorsList();
      } catch (err) {
        setError({ hasError: true, errorInfo: err });
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    makeUpdateRequest();
  };

  const deleteAuthor = (id: number) => {
    async function makeDeleteRequest() {
      setLoading(true);
      try {
        await apiAuthorDelete(id);
        await getAuthorsList();
      } catch (err) {
        setError({ hasError: true, errorInfo: err });
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    makeDeleteRequest();
  };

  const createAuthor = (newAuthor: Author.New.Data) => {
    async function makeCreateRequest() {
      setLoading(true);
      try {
        await apiAuthorCreate(newAuthor);
        browserHistory.goBack();
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
    if (lazyLoading && search === defaultSearch) return;
    const params: Author.All.Params = {};
    if (search) {
      params.search = search;
    }
    getAuthorsList(params);
  }, [search]);

  return {
    authorsList: data,
    loading,
    error,
    setSearch,
    updateAuthor,
    deleteAuthor,
    createAuthor,
  };
};
