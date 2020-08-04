import React from 'react'
import Todo from '../Todo' 
class TodoList extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
               <p>To do List</p>
               <div>
                   {
                        this.props.todoList.map((value,index)=>
                            <Todo key={index} todo={value}/>
                       )
                   }
               </div>
            </div>
        );
    }
}
export default TodoList;