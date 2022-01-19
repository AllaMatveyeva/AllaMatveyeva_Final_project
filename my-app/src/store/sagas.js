import { all, spawn } from "redux-saga/effects";
import { charactersSaga } from "./characters/sagas";
import { usersSaga } from "./users/sagas";

const sagas = function* () {
  yield all([spawn(usersSaga), spawn(charactersSaga)]);
};

export default sagas;
