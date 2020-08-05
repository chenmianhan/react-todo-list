import { connect } from 'react-redux';
import DoneList from "../components/DoneList";
import { deleteItem,changeStatus,addTodo} from "../actions";
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
const DoneListContainer=connect(mapStateToProps,mapDispatchToProps)(DoneList)
export default DoneListContainer