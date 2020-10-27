import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
  reducer,  // 需要一个管理员 reducer
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store