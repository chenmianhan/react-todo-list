import { connect } from 'react-redux';
import TodoList from "../components/TodoList";
import { deleteItem,changeStatus,addTodo } from "../actions";
const mapStateToProps=state=>{
    return{
       todoList: state.todoList
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        deleteItem:(text)=>{
            dispatch(deleteItem(text))
        },
        changeStatus:(status,index)=>{
            dispatch(changeStatus(status,index))
        },
        addTodo:(text)=>{
            dispatch(addTodo(text))
        }
    }
}
const TodoListContainer=connect(mapStateToProps,mapDispatchToProps)(TodoList)
export default TodoListContainer