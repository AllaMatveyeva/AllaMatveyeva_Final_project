import {
  all,
  call,
  put,
  takeEvery,
  take,
  fork,
  takeLeading,
  spawn,
  select,
} from "redux-saga/effects";
import { getComers } from "../../api/api";
import {
  FETCH_CHARACTERS,
  setFetchCharactersStatus,
  setCharacters,
  fetchCharacters,
} from "./actions";
import { ERROR429, FAILED, LOADING, SUCCESS } from "../../constants/statuses";
import { response } from "msw";

function* fetchCharacterWatcher() {
  yield takeEvery(FETCH_CHARACTERS, fetchCharactersWorker);
}

function* fetchCharactersWorker(action) {
  try {
    yield put(setFetchCharactersStatus(LOADING));
    console.log(action.payload);

    const response = yield call(getComers, action.payload);

    yield put(setCharacters(response.data.docs));
    yield put(setFetchCharactersStatus(SUCCESS));
  } catch (e) {
    if (response === "429") {
      yield put(setFetchCharactersStatus(ERROR429));
    } else {
      yield put(setFetchCharactersStatus(FAILED));
    }
  }
}

export const charactersSaga = function* () {
  yield all([call(fetchCharacterWatcher)]);
};
