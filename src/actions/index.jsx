export const addTodo = (text) => {
    return {
        text:text,
    type:"ADD_TODO"
    }
}
export const deleteItem=(index)=>{
    return{
        text:index,
        type:"DELETE_ITEM"
    }
}