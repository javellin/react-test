import { call, put, takeEvery } from "redux-saga/effects";
import authorService from "../services/authorService";
import { actions, types } from "../reducers/authorReducer";

function* fetchAuthors(action) {
  const { payload } = action;
  const response = yield call(
    authorService.fetch,
    payload.searchText,
    payload.page,
    payload.size
  );
  yield put(actions.updateAuthors(response));
}

function* authorsSaga() {
  yield takeEvery(types.FETCH_AUTHORS, fetchAuthors);
}

export default authorsSaga;
