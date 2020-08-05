import React from 'react'
import Todo from '../Todo'
import { getTodoList,deleteTodoList , putTodoList} from '../../store/api'
class TodoList extends React.Component {
    deleteItem = (index) => {
        deleteTodoList(index).then((res)=>{
            this.props.deleteItem(res.data.id);
        })
    }
    changeStatus=(status,index)=>{
        putTodoList({
            status:status,
            id:index
        }).then((res)=>{
            console.log(res.data)
            this.props.changeStatus(status,index)
            
        })
        
    }

    componentDidMount() {
        if(this.props.todoList.length === 0) {
            getTodoList().then((res) => {
                res.data.forEach(item => {
                    this.props.addTodo({
                        text:item.content,
                        isDone:item.status,
                        id:item.id
                })
                });
            })
        }
    }
    componentWillReceiveProps(){
        console.log(this.props)
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
                                index={value.id} 
                                isDone={value.isDone} />
                        )
                    }
                </div>
            </div>
        );
    }
}
export default TodoList;