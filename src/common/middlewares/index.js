import { all } from "redux-saga/effects";

import booksSaga from "./bookSaga";
import authorSaga from "./authorSaga";
import publisherSaga from "./publisherSaga";

export default function* rootSaga() {
  yield all([booksSaga(), authorSaga(), publisherSaga()]);
}
