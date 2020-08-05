import React from 'react'
import Todo from '../Todo'
import { deleteTodoList , putTodoList} from '../../store/api'
class DoneList extends React.Component {
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
    render() {
        return (
            <div>
               
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