export const addTodo = (text) => {
    return {
        text:text,
    type:"ADD_TODO",
    isDone:false
    }
}
export const deleteItem=(index)=>{
    return{
        text:index,
        type:"DELETE_ITEM"
    }
}
export const changeStatus=(status,index)=>{
    return{
        type:"CHANGE_STATUS",
        index:index,
        isDone:status
    }
}