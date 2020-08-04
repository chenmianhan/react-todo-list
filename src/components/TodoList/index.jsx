import React from 'react'
import Todo from '../Todo' 
class TodoList extends React.Component {

    deleteItem=(index)=>{
        this.props.deleteItem(index)
    }
    render() {
        return (
            <div>
               <p>To do List</p>
               <div>
                   {
                        this.props.todoList.map((value,index)=>
                            <Todo key={index} todo={value} deleteItem={this.deleteItem} index={index}/>
                       )
                   }
               </div>
            </div>
        );
    }
}
export default TodoList;