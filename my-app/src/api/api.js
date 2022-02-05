import axios from "axios";

export const getComers = (letter) =>
  axios.get(`https://the-one-api.dev/v2/character?name=/^${letter}{1}./i`, {
    headers: {
      Authorization: "Bearer zNmTP2_vI0m9CoNNfoTy",
    },
  });

export const getQuotes = (id) =>
  axios.get(`https://the-one-api.dev/v2/character/${id}/quote`, {
    headers: {
      Authorization: "Bearer zNmTP2_vI0m9CoNNfoTy",
    },
  });

export const getMovies = () =>
  axios.get(`https://the-one-api.dev/v2/movie`, {
    headers: {
      Authorization: "Bearer zNmTP2_vI0m9CoNNfoTy",
    },
  });

export const getAvatar = (id) =>
  axios.get(`http://localhost:4000/api/characters/${id}/pic`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });

export const getCharacters = (option, value) => {
  console.log("getCharacters");
  return axios.get(
    `https://the-one-api.dev/v2/character?${option}=/^${value}{1}./i`,
    {
      headers: {
        Authorization: "Bearer zNmTP2_vI0m9CoNNfoTy",
      },
    }
  );
};
