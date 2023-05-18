import { useState, useEffect } from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const useUsersApi = (apiFunction, id, data) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchToSearch() {
      try {
        setIsLoading(true);
        const r = await apiFunction(id, data);
        setUsers(r);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchToSearch();
  }, [apiFunction, id, data]);
  return { users, error, isLoading };
};

export default useUsersApi;
