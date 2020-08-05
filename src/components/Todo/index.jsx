import React from 'react'
import './index.css';

class Todo extends React.Component {
    
    onClickdelete=(event)=>{
        this.props.deleteItem(this.props.index)
    }
    onClickChangeStatus=(event)=>{
        this.props.changeStatus(
            !this.props.isDone,this.props.index
        )
    }
    render() {
        let classname=this.props.isDone?'done':'todo'
        return (
            <div>
                <input className={classname} type="text" readOnly value={this.props.todo}  onClick={this.onClickChangeStatus}/>
                <input type="button" value="delete" onClick={this.onClickdelete} />
                
            </div>
        );
    }
}
export default Todo;