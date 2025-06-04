import axios from "axios";
import { useState } from "react";

export const useManualFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get<T>(url)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((e) => {
          setError(e);
          setLoading(false);
        });
    }, 5000);
  };

  return { data, loading, error, fetchData } as const;
};
