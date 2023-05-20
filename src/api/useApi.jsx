import { useState, useEffect } from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const useUsersApi = (apiFunction) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchToSearch() {
      try {
        setIsLoading(true);
        const r = await apiFunction();
        setResult(r);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchToSearch();
  }, [apiFunction]);
  return { result, error, isLoading };
};

export default useUsersApi;
