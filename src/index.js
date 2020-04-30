import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import App from "./containers/App/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import {
  searchMeals,
  requestMeal,
  requestViewMeal
} from "./reducers";

const logger = createLogger();
const rootReducer = combineReducers({
  searchMeals,
  requestMeal,
  requestViewMeal
});
export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
