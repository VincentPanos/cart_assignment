import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://demo0336234.mockable.io/";

export function useGetData<T>(url: string, identifier?: string) {
  const [data, setData] = useState<T[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(BASE_URL + url)
      .then((response) => {
        setData(response.data[identifier ?? url]);
      })
      .catch(() => {
        setError("An unexpected error has occurred");
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
}
