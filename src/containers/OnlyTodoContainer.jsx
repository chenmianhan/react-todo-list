import { connect } from 'react-redux';
import OnlyTodoList from "../components/OnlyTodoList";
import { deleteItem,changeStatus ,addTodo} from "../actions";
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
const OnlyTodoListContainer=connect(mapStateToProps,mapDispatchToProps)(OnlyTodoList)
export default OnlyTodoListContainer