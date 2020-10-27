import { ADD_ITEM, CHANGE_INPUT, DELE_ITEM } from "./actionTypes";

export const changeInputAction = value => ({ type: CHANGE_INPUT, value })

export const addItemAction = () => ({ type: ADD_ITEM })

export const deleItemAction = index => ({ type: DELE_ITEM, index })