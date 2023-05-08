import { ACTION_ONE, ACTION_TWO } from "./type";
import { BaseStore } from "./interface";
import dayjs from "dayjs";

const initialState: BaseStore = {
    nodedetail:[{
        Voltage:0,
        updatedAt: dayjs()
        }],
    testItem: 0,
  }

export const reducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch(action.type) {
        case ACTION_ONE:
            return {
                ...state,
                testItem: state.testItem - action.payload
            }
            
        case ACTION_TWO:
            return{
                ...state,
                nodedetail: action.payload
            }
            
        default: 
            return {...state};

    }
}