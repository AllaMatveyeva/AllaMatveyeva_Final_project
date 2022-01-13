export const SET_CHARACTERS = "characters/SET_CHARACTERS";
export const Change_CHARACTERS = "characters/SET_CHARACTERS";

export const setCharacters = (data) => ({
  type: SET_CHARACTERS,
  payload: data,
});

export const changeCharacters = (data) => ({
  type: Change_CHARACTERS,
  payload: data,
});
