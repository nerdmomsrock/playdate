import { createStore, combineReducers } from "redux";
import userReducer from "./userReducer";
import matchReducer from "./matchReducer";

const rootReducer = combineReducers({
  user: userReducer,
  matches: matchReducer,
});

export default createStore(rootReducer);
