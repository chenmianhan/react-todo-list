const todoList = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            console.log(state)
            return [...state,
            {
                id:action.id,
                text: action.text,
                isDone: action.isDone
            }
            ]
        case "DELETE_ITEM":
            console.log(action)
            return [...state].filter(
                item => 
                   item.id !== action.text
                
            )
        case 'CHANGE_STATUS':
            return [...state].map(
                item =>
                item.id === action.index ?
                        {
                            id:action.index,
                            text: item.text,
                            isDone: action.isDone
                        } : item
            )

        default: return state

    }
}
export default todoList