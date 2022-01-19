export const FETCH_CHARACTERS = "users/FETCH_CHARACTERS";

export const SET_CHARACTERS = "characters/SET_CHARACTERS";
export const SET_FETCH_CHARACTERS_STATUS =
  "characters/SET_FETCH_CHARACTERS_STATUS";

export const fetchCharacters = (letter) => ({
  type: FETCH_CHARACTERS,
  payload: letter,
});

export const setCharacters = (data) => ({
  type: SET_CHARACTERS,
  payload: data,
});

export const setFetchCharactersStatus = (status) => ({
  type: SET_FETCH_CHARACTERS_STATUS,
  payload: status,
});
