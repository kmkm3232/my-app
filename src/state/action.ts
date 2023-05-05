import { ACTION_ONE, ACTION_TWO } from "./type"

export const actionOne = () => {
    return {
      type: ACTION_ONE,
      payload: 1
    }
  }

export const actionTwo = (prop: number) => {
  return {
    type: ACTION_TWO,
    payload: prop
  }
}
