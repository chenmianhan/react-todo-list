const todoList=(state=[],action)=>{
    switch(action.type){
        case 'ADD_TODO':
            console.log(state)
            return [...state ,action.text]
            
            default:return state
    }
}
export default todoList