import { call, put, takeEvery } from "redux-saga/effects";
import publisherService from "../services/publisherService";
import { actions, types } from "../reducers/publisherReducer";

function* fetchPublishers(action) {
  const { payload } = action;
  const response = yield call(
    publisherService.fetch,
    payload.searchText,
    payload.page,
    payload.size
  );
  yield put(actions.updatePublishers(response));
}

function* publisherSaga() {
  yield takeEvery(types.FETCH_PUBLISHERS, fetchPublishers);
}

export default publisherSaga;
