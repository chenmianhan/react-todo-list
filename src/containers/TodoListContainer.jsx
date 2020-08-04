import { connect } from 'react-redux';
import TodoList from "../components/TodoList";

const mapStateToProps=state=>{
    console.log(state)
    return{

       todoList: state.todoList
    }
}
const TodoListContainer=connect(mapStateToProps)(TodoList)
export default TodoListContainer