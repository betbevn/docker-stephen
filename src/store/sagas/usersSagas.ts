import { call, put, takeLatest } from "redux-saga/effects";
import { User } from "../../types/users";

function* fetchUser() {
  try {
    const response: User[] = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      )
    );
    yield put({ type: "FETCH_USERS_SUCCESS", payload: response });
  } catch (e) {
    yield put({
      type: "FETCH_USERS_ERROR",
      message: e instanceof Error ? e.message : "An error occurs",
    });
  }
}

function* usersSaga() {
  yield takeLatest("FETCH_USERS_REQUEST", fetchUser);
}

export default usersSaga;
