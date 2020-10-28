import { ADD_ITEM, CHANGE_INPUT, DELE_ITEM, GET_LIST, GET_MY_LIST } from "./actionTypes";
import axios from 'axios'

// dispatch 中的参数
// 参数：一个含有 type 和 params 的对象，作为参数
export const changeInputAction = value => ({ type: CHANGE_INPUT, value })

export const addItemAction = () => ({ type: ADD_ITEM })

export const deleItemAction = index => ({ type: DELE_ITEM, index })

export const getListAction = data => ({ type: GET_LIST, data })


// 返回一个函数，相当于 dva 中的 effects
export const getTodoList = () => {
  return (dispatch) => {
    axios
      .get('https://www.fastmock.site/mock/e6514194ff79c9dbcf5d721d3dc7b5d1/todo-list/get-list')
      .then(res => {
        const data = res.data
        const action = getListAction(data)

        dispatch(action)
      })
  }
}


export const getMyListAction = () => ({ type: GET_MY_LIST })