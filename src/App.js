import React from "react";
import ResultList from "./page/ResultList";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

export default function App() {
  return (
    <Provider store={configureStore}>
      <ResultList />
    </Provider>
  );
}
