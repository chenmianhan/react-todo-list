import React from 'react'
import Todo from '../Todo'
class TodoList extends React.Component {
    deleteItem = (index) => {
        this.props.deleteItem(index)
    }
    changeStatus=(status,index)=>{
        this.props.changeStatus(status,index)
    }

    render() {
        return (
            <div>
                <p>To do List</p>
                <div>
                    {
                        this.props.todoList.map((value, index) =>
                            <Todo
                                key={index}
                                todo={value.text}
                                deleteItem={this.deleteItem}
                                changeStatus={this.changeStatus}
                                index={index} 
                                isDone={value.isDone} />
                        )
                    }
                </div>
            </div>
        );
    }
}
export default TodoList;