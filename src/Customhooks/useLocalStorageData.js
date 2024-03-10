import { useEffect, useState } from "react";

const useLocalStorageData = (storageKey) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMount = true;

    const fetchDataFromLocalStorage = () => {
      setIsLoading(true);
      try {
        const localStorageData = localStorage.getItem(storageKey);
        const parsedData = localStorageData ? JSON.parse(localStorageData) : [];
        if (isMount) {
          setData(parsedData);
          setFetchError(null);
        }
      } catch (err) {
        if (isMount) {
          setData([]);
          setFetchError(err.message);
        }
      } finally {
        isMount && setIsLoading(false);
      }
    };

    fetchDataFromLocalStorage();

    return () => {
      isMount = false;
    };
  }, [storageKey]);

  return { data, fetchError, isLoading };
};

export default useLocalStorageData;
