import { combineReducers } from "redux";
import { reducer } from "./reducer"
import { store } from "./store"

export const reducers = combineReducers({
  reducer,
})


export { store };

