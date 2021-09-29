import axios from "axios";
import {
  LOAD_RESULT_REQUEST,
  LOAD_RESULT_SUCCESS,
  LOAD_RESULT_FAILURE,
  LOAD_SEARCHLIST_REQUEST,
  LOAD_SEARCHLIST_SUCCESS,
  LOAD_SEARCHLIST_FAILURE,
} from "../reducer/result";
import { all, fork, call, put, takeLatest } from "redux-saga/effects";

function loadResultAPI(data) {
  return axios.get(`/result/`);
}

function searchListAPI(data) {
  return axios.get(`/result/${data}`);
}

function* loadResult(action) {
  try {
    const result = yield call(loadResultAPI, action.data);
    yield put({
      type: LOAD_RESULT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_RESULT_FAILURE,
      error: err.response.data,
    });
  }
}

function* searchList(action) {
  try {
    const result = yield call(searchListAPI, action.keyword);
    yield put({
      type: LOAD_SEARCHLIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_SEARCHLIST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadResult() {
  yield takeLatest(LOAD_RESULT_REQUEST, loadResult);
}

function* watchSearchList() {
  yield takeLatest(LOAD_SEARCHLIST_REQUEST, searchList);
}

export default function* resultSaga() {
  yield all([fork(watchLoadResult), fork(watchSearchList)]);
}
