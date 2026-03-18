import axios from "axios";

const API = "http://localhost:5000/api";

export const getUsers = async () => {
  const res = await axios.get(`${API}/users`);
  return res.data;
};