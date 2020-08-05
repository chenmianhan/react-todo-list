import React from 'react'
import {postTodoList} from '../../store/api'
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
            <form onSubmit={this.handleSubmit}>
              <input id="todo" type="text" onChange={this.handleChange} placeholder="input you to do" />
              <input type="submit" value="add"  />
          </form>
        );
    }
}
export default TodoForm;