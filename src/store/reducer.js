import { ADD_ITEM, CHANGE_INPUT, DELE_ITEM, GET_LIST } from "./actionTypes"

/* eslint-disable import/no-anonymous-default-export */
const defaultStore = {
  inputValue: '',
  list: []
}

export default (state = defaultStore, action) => {
  // console.log(state, action)

  switch (action.type) {
    case CHANGE_INPUT: {  
      return {
        ...state,
        inputValue: action.value
      }
    }
    case ADD_ITEM: {
      // 后面跟大括号，块级作用域。否则下面定义 const newState 会报 newState 已经定义过的错误
      const newState = {...state}

      newState.list.push(state.inputValue)

      return {
        ...state,
        inputValue: '',
        list: newState.list
      }
    }
    case DELE_ITEM: {
      const newState = {...state}

      newState.list.splice(action.index, 1)

      return {
        ...state,
        list: newState.list
      }
    }
    case GET_LIST: {
      const newState = {...state}

      newState.list = action.data.data.list

      return {
        ...state,
        list: newState.list
      }
    }
    default:
      return state
  }
}