import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const combinedReducers = combineReducers({
  form: formReducer,
});

export default combinedReducers;
