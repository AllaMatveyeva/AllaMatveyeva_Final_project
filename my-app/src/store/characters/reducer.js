import cloneDeep from "lodash.clonedeep";
import { SET_CHARACTERS } from "./actions";
import { SET_FETCH_CHARACTERS_STATUS } from "./actions";

const defaultState = {
  characters: [],
  fetchCharacterStatus: null,
};

export const charactersReducer = (state = defaultState, action) => {
  switch (action?.type) {
    case SET_CHARACTERS: {
      const clone = cloneDeep(state);
      clone.characters = action.payload;
      return clone;
    }
    case SET_FETCH_CHARACTERS_STATUS: {
      const clone = cloneDeep(state);
      clone.fetchCharacterStatus = action.payload;
      return clone;
    }
    default:
      return state;
  }
};
