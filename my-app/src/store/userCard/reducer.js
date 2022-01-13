import cloneDeep from "lodash.clonedeep";

import { SET_MODAL, SHOW_MOFAL } from "./actions";

const defaultState = {
  value: false,
};

export const userCardReducer = (state = defaultState, action) => {
  switch (action?.type) {
    case SET_MODAL: {
      const clone = cloneDeep(state);
      clone.value = action.payload;

      return clone;
    }

    case SHOW_MOFAL: {
      const clone = cloneDeep(state);
      clone.value = action.payload;

      return clone;
    }

    default:
      return state;
  }
};
