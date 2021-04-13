import { apiAuthorGetAll } from "../api/author";
import { Author } from "../types/author";
import { Errors } from "../errors/types";
import { useEffect, useState } from "react";

interface UseAuthors {
  authorsList: Author.Data[];
  loading: boolean;
  error: Errors.APIRequestError;
  setSearch: (search: string) => void;
}

export const useAuthors = (defaultSearch: string = ""): UseAuthors => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Errors.APIRequestError>({ hasError: false, errorInfo: null });
  const [data, setData] = useState<Author.Data[]>([]);
  const [search, setSearch] = useState<string>(defaultSearch);

  useEffect(() => {
    const params: Author.All.Params = {};

    if (search) {
      params.search = search;
    }

    async function getAuthors() {
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
    }

    getAuthors();
  }, [search]);

  return {
    authorsList: data,
    loading,
    error,
    setSearch,
  };
};
