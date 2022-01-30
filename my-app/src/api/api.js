import axios from "axios";

export const getComers = (letter) =>
  axios.get(`https://the-one-api.dev/v2/character?name=/^${letter}{1}./i`, {
    headers: {
      Authorization: "Bearer VE3TQswW4reG5Luwm85f",
    },
  });

export const getQuotes = (id) =>
  axios.get(`https://the-one-api.dev/v2/character/${id}/quote`, {
    headers: {
      Authorization: "Bearer VE3TQswW4reG5Luwm85f",
    },
  });

export const getMovies = () =>
  axios.get(`https://the-one-api.dev/v2/movie`, {
    headers: {
      Authorization: "Bearer VE3TQswW4reG5Luwm85f",
    },
  });

export const getAvatar = (id) =>
  axios.get(`http://localhost:4000/api/characters/${id}/pic`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
