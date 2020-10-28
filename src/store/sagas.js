/* eslint-disable require-yield */
import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import axios from 'axios'
import { getListAction } from './actions'

function* mySagas() {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  // axios
  //   .get('https://www.fastmock.site/mock/e6514194ff79c9dbcf5d721d3dc7b5d1/todo-list/get-list')
  //   .then(res => {
  //     const data = res.data
  //     const action = getListAction(data)

  //     put(action)
  //   })

  const res = yield axios.get('https://www.fastmock.site/mock/e6514194ff79c9dbcf5d721d3dc7b5d1/todo-list/get-list')
  const action = getListAction(res.data)

  yield put(action)
}

export default mySagas