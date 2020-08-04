import { connect } from 'react-redux'
import TodoForm from "../../components/TodoForm";

const mapDispatchToProps=dispatch=>{
    return {
        addTodo:(text)=>{
            dispatch({
                text:text,
                type:"ADD_TODO"
            })
        }
    }
}

const TodoFormContainer=connect(null,mapDispatchToProps)(TodoForm)
export default TodoFormContainer