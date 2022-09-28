import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const API_URL = "https://jsonlink.io/api/extract?url=";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API_URL + url)
      .then((res) => res.json())
      .then((data) => {
        setError(data.error);
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
