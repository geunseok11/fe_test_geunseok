import { all, fork } from "redux-saga/effects";
import axios from "axios";

import resultSaga from "./result";

axios.defaults.baseURL = "http://testapi.hits.ai";

export default function* rootSaga() {
  yield all([fork(resultSaga)]);
}
