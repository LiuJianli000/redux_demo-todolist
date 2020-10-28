import React, { Component } from 'react';
import store from '../store'
import { addItemAction, changeInputAction, deleItemAction, getTodoList } from '../store/actions';
import TodoListUI from './TodoListUI';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: store.getState().inputValue,
      list: store.getState().list
    }
    // console.log(store.getState()) 获取 store 里面的值
    store.subscribe(() => this.setState(store.getState()))  // 订阅 store，否则不能同步数据！！！
  }

  componentDidMount() {
    this.fetchList()
  }

  fetchList = () => {
    const action = getTodoList()

    store.dispatch(action) 
  }

  handleValueChange = e => {
    // 触发 reducer 中的方法
    const action = changeInputAction(e.target.value)
    
    store.dispatch(action)
  }

  handleAdd = () => {
    const action = addItemAction()
    
    store.dispatch(action)
  }

  handleDele = index => {
    const action = deleItemAction(index)
    
    store.dispatch(action)
  }

  render() { 
    const { inputValue, list } = this.state
    
    return ( 
      <>
        <TodoListUI
          inputValue={inputValue}
          list={list}
          handleValueChange={this.handleValueChange}
          handleAdd={this.handleAdd}
          handleDele={this.handleDele}
        />
      </>
     );
  }
}
 
export default TodoList;