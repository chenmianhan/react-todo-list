import React from 'react'
import Todo from '../Todo'
import { getTodoList,deleteTodoList , putTodoList} from '../../store/api'
class DoneList extends React.Component {
    // deleteItem = (index) => {
    //     this.props.deleteItem(index)
    // }
    // changeStatus = (status, index) => {
    //     this.props.changeStatus(status, index)
    // }
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
    render() {
        return (
            <div>
                <p>To do List</p>
                <div>
                    {
                        this.props.todoList.filter(item => item.isDone === false)
                            .map((value, index) =>
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
export default DoneList;