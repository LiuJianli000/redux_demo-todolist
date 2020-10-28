import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

// 添加一个增强函数
const composeEnhancers = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
  reducer,  // 需要一个管理员 reducer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // 删掉此句
  // applyMiddleware(thunk),  // 直接这么写，redux 调试工具不可用
  enhancer
)

export default store