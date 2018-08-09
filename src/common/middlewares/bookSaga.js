import { call, put, takeEvery } from "redux-saga/effects";
import bookService from "../services/bookService";
import { actions, types } from "../reducers/bookReducer";

function* fetchFavorites() {
  const favoriteBooks = yield call(bookService.fetchFavorites);
  yield put(actions.updateFavoriteBooks(favoriteBooks));
}

function* booksSaga() {
  yield takeEvery(types.FETCH_FAVORITE_BOOKS, fetchFavorites);
}

export default booksSaga;
