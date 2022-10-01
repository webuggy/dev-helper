import { useEffect, useState } from "react";
import { MetadataInterface } from "../interfaces/metadata";

const useApi = (url: string) => {
  const API_URL = "https://jsonlink.io/api/extract?url=";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<MetadataInterface>();

  const fetchApi = () => {
    fetch(API_URL + url) // 'https://jsonplaceholder.typicode.com/users'
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setLoading(false);
        setData(json);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data };
};

export default useApi;
