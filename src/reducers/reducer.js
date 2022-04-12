import { combineReducers } from "redux";
import asyncDataReducer from "../reducers/request";
import quoteReducer from "../reducers/quotes";

const rootReducer = combineReducers({
  quotes: quoteReducer,
  request: asyncDataReducer,
});

export default rootReducer;
