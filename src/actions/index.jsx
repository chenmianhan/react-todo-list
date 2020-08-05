export const addTodo = (value) => {
    return {
        text:value.text,
    type:"ADD_TODO",
    isDone:value.isDone,
    id:value.id
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