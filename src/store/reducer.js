import { ADD_ITEM, CHANGE_INPUT, DELE_ITEM } from "./actionTypes"

/* eslint-disable import/no-anonymous-default-export */
const defaultStore = {
  inputValue: '',
  list: [
    '早8点开晨会，分配今天的代码任务',
    '早9点和项目经理开需求沟通会',
    '早10点开始今天的需求任务开发'
  ]
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
    default:
      return state
  }
}