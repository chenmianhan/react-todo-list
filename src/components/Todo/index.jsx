import React from 'react'
class Todo extends React.Component {
    
    onClickdelete=(event)=>{
        this.props.deleteItem(this.props.index)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <input type="text" readOnly value={this.props.todo} />
                <input type="button" value="delete" onClick={this.onClickdelete} />
                
            </div>
        );
    }
}
export default Todo;