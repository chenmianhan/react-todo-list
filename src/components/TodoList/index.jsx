import React from 'react'
import Todo from '../Todo'
import { List, Divider } from 'antd';
import { getTodoList, deleteTodoList, patchTodoList } from '../../store/api'
class TodoList extends React.Component {
    deleteItem = (index) => {
        deleteTodoList(index).then((res) => {
            console.log("deleteaItem:")
            console.log(res)
            this.props.deleteItem(index);
        })
    }
    changeStatus = (status, index,content) => {
        patchTodoList({
            status: status,
            id: index,
            content:content
        }).then((res) => {
            console.log(" patchTodoList:")
            console.log(res)
            this.props.changeStatus(status, index)

        })

    }

    componentDidMount() {
        if (this.props.todoList.length === 0) {
            getTodoList().then((res) => {
                res.data.forEach(item => {
                    console.log("getTodoList:")
                    console.log(res)
                    this.props.addTodo({
                        text: item.content,
                        isDone: item.status,
                        id: item.id
                    })
                });
            })
        }
    }


    render() {
        return (
            <div>
                <Divider orientation="left">To do List</Divider>
                <List bordered>
                    <div>
                        <div>
                            {
                                this.props.todoList.map((value, index) =>
                                    <List.Item key={index} >
                                        <Todo
                                            key={index}
                                            todo={value.text}
                                            deleteItem={this.deleteItem}
                                            changeStatus={this.changeStatus}
                                            index={value.id}
                                            isDone={value.isDone} />
                                    </List.Item>
                                )
                            }
                        </div>
                    </div>
                </List>
            </div >

        );
    }
}
export default TodoList;