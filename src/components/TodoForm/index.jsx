import React from 'react'
import {postTodoList} from '../../store/api'
import { Button, Space,Input } from 'antd';
import { EditTwoTone } from '@ant-design/icons';
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
      }
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        
        postTodoList({
            content:this.state.value,
            status:false
        }).then((res)=>{
            this.props.addTodo({
                id: res.data.id,
                text: res.data.content,
                isDone: res.data.status
            })
        })
        document.getElementById("todo").value=''
    }
    
    render() {
        return (
            <Space>
           
              <Input id="todo" type="text" onChange={this.handleChange} placeholder="input you to do" />
              <Button onClick={this.handleSubmit}>
              <EditTwoTone/>add
              </Button>
          </Space>
        );
    }
}
export default TodoForm;