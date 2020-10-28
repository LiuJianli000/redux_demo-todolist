import { ADD_ITEM, CHANGE_INPUT, DELE_ITEM, GET_LIST } from "./actionTypes";

export const changeInputAction = value => ({ type: CHANGE_INPUT, value })

export const addItemAction = () => ({ type: ADD_ITEM })

export const deleItemAction = index => ({ type: DELE_ITEM, index })

export const getListAction = data => ({ type: GET_LIST, data })