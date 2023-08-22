import { useState } from 'react';
import { fetchAPI } from '../api';

export const useFetch = <T>() => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async (url: string, options: RequestInit) => {
    try {
      const data = await fetchAPI(url, options);

      setData(data);
    } catch (error) {
      if (error) return;
    } finally {
      setIsLoading(false);
    }
  };

  const getAPI = async (url: string, authorization?: string) => {
    const response = await fetchData(
      url,
      authorization
        ? {
            method: 'GET',
            headers: {
              Authorization: authorization,
            },
          }
        : {
            method: 'GET',
          }
    );

    return response;
  };

  return { data, isLoading, getAPI };
};
