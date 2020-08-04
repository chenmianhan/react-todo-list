import React from 'react'
import Todo from '../Todo' 
class TodoList extends React.Component {
    render() {
        return (
            <div>
               <p>To do List</p>
               <div>
                   {
                       new Array(6).fill(0).map((value,index)=>
                            <Todo/>
                       )
                   }
               </div>
            </div>
        );
    }
}
export default TodoList;