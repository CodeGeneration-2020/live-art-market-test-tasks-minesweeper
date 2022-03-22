import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import { rootSaga } from "./redux-saga/rootSaga";
import boardReducer from "./slice";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    board: boardReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);

export { store };
