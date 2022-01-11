import axios from "axios";

export const getUsers = () =>
  axios.get("/api/users", {
    headers: {
      Authentication: `Basic ${JSON.parse(localStorage.getItem("me"))?.token}`,
    },
  });