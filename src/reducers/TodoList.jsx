const todoList = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [...state,
            {
                text: action.text,
                isDone: action.isDone
            }
            ]
        case "DELETE_ITEM":
            return [...state].filter(
                (value, index) => {
                    return index !== action.text;
                }
            )
        case 'CHANGE_STATUS':
            return [...state].map(
                (item, index) =>
                    index === action.index ?
                        {
                            text: item.text,
                            isDone: action.isDone
                        } : item
            )

        default: return state

    }
}
export default todoList