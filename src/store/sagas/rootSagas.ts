import { all } from "redux-saga/effects";
import usersSaga from "./usersSagas";

export function* rootSagas() {
  yield all([usersSaga()]);
}
