import axios from "axios";

export const getUsers = (token) =>
  axios.get("/api/users", {
    headers: {
      Authentication: `Basic ${token}`,
    },
  });
