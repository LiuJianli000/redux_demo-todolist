import { Button, Input, List } from 'antd';
import React, { Component } from 'react';
import store from '../store'
import { addItemAction, changeInputAction, deleItemAction } from '../store/actions';

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
    const action = deleItemAction()
    
    store.dispatch(action)
  }

  render() { 
    const { inputValue, list } = this.state
    
    return ( 
      <div style={{ margin: 10 }}>
        <div>
          <Input
            placeholder='Write something...'
            style={{ width: 300, marginRight: 10 }}
            onChange={this.handleValueChange}
            allowClear
            value={inputValue}  // 如果没有 subscribe，input 输入无效
          />
          <Button type="primary" onClick={this.handleAdd}>Add</Button>
        </div>
        <div style={{ marginTop: 10, width: 300 }}>
          <List
            bordered
            dataSource={list}
            renderItem={(item, index) => <List.Item onClick={() => this.handleDele(index)}>{item}</List.Item>}
          />
        </div>
      </div>
     );
  }
}
 
export default TodoList;