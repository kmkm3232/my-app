import { createStore } from "redux";
// import { actionOne } from "./action"
import { combineReducers } from "redux";
import { reducer } from "./reducer"
import { store } from "./store"
import { actionOne } from "./action";


export const reducers = combineReducers({
  reducer,
})


console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('更新', store.getState()))

store.dispatch(actionOne())

unsubscribe()

