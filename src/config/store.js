import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../common/reducers";
import rootSaga from "../common/middlewares";

const middlewareForSaga = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(middlewareForSaga))
);

middlewareForSaga.run(rootSaga);

export default { store };
