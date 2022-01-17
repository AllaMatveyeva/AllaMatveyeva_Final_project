import cloneDeep from "lodash.clonedeep";
import { SET_CHARACTERS, Change_CHARACTERS } from "./actions";

const defaultState = {
  characters: [],
};

export const charactersReducer = (state = defaultState, action) => {
  switch (action?.type) {
    case SET_CHARACTERS: {
      const clone = cloneDeep(state);
      clone.characters = action.payload;
      return clone;
    }
    case Change_CHARACTERS: {
      const clone = cloneDeep(state);
      clone.characters = action.payload;
      return clone;
    }

    default:
      return state;
  }
};
