import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { stateReducer } from "./reducers";

const composeEnhancers =
  process.env.NODE_ENV === "development" ? typeof window != 'undefined' && (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const reducers = combineReducers({
  state: stateReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
