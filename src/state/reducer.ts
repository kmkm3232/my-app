import { ACTION_ONE, ACTION_TWO } from "./type";
import { BaseStore } from "./interface";

const initialState: BaseStore = {
    Voltage: 0,
    testItem: 0,
  }

export const reducer = (state = initialState, action: { type: any; payload: number; }) => {
    switch(action.type) {
        case ACTION_ONE:
            return {
                ...state,
                testItem: state.testItem - action.payload
            }
            
        case ACTION_TWO:
            return{
                ...state,
                Voltage: action.payload
            }
            
        default: 
            return {...state};

    }
}