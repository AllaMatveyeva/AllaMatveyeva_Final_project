import { combineReducers } from "redux";
import { userCardReducer } from "./userCard/reducer";

const redusers = combineReducers({
  userCard: userCardReducer,
});

export default redusers;
