const todoList = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.text]
        case "DELETE_ITEM":
            return [...state].filter(        
                (value,index)=>{
               return index!==action.text;
            }
            )
        
        default: return state

    }
}
export default todoList