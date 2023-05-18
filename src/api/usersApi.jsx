import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";

const API_BACKEND = "https://6464afad127ad0b8f8a52e07.mockapi.io/api/users";

export const getAllUsers = async () => {
  return await axios.get(`${API_BACKEND}`).then((r) => r.data);
};

export const getMoviesById = async (id, user) => {
  return await axios.patch(`${API_BACKEND}/${id}`, user).then((r) => r.data);
};
