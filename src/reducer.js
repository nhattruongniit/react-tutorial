import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import appReducer from "./redux/reducer";

export default combineReducers({
  app: appReducer,
  form
});
