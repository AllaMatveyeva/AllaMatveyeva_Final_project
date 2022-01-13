import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { charactersReducer } from "./characters/reducer";

import { usersReducer } from "./users/reducer";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  characters: charactersReducer,
});
