import { connect } from 'react-redux';
import TodoList from "../components/TodoList";
import { deleteItem } from "../actions";
const mapStateToProps=state=>{
    return{
       todoList: state.todoList
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        deleteItem:(text)=>{
            dispatch(deleteItem(text))
        }
    }
}
const TodoListContainer=connect(mapStateToProps,mapDispatchToProps)(TodoList)
export default TodoListContainer