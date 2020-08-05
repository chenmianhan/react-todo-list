import React from 'react'
import './index.css';
import { Button, Space,Input } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';

class Todo extends React.Component {
    
    onClickdelete=(event)=>{
        this.props.deleteItem(this.props.index)
    }
    onClickChangeStatus=(event)=>{
        this.props.changeStatus(
            !this.props.isDone,this.props.index
        )
    }
    render() {
        let classname=this.props.isDone?'done':'todo'
        return (
            <Space>
           
                <input className={classname} type="text" readOnly value={this.props.todo}  onClick={this.onClickChangeStatus}/>
                <Button onClick={this.onClickdelete}>
                <DeleteTwoTone />delete
              </Button>
    
            </Space>
        );
    }
}
export default Todo;