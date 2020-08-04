import { connect } from 'react-redux';
import TodoList from "../../components/TodoList";

const mapStateToProps=state=>{
    return{
       todoList: state.todoList
    }
}
const TodoListContainer=connect(mapStateToProps)(TodoList)
export default TodoListContainer