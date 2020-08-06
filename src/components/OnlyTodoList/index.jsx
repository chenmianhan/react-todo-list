import React from 'react'
import Todo from '../Todo'
import { deleteTodoList ,  patchTodoList} from '../../store/api'
class DoneList extends React.Component {
    deleteItem = (index) => {
        deleteTodoList(index).then((res)=>{
            this.props.deleteItem(index);
        })
    }
    changeStatus=(status,index,content)=>{
        patchTodoList({
            status:status,
            id:index,
            content:content
        }).then((res)=>{
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