import React from 'react'
class Todo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <input type="text" readonly="true" value={this.props.todo} />
                <input type="button" value="delete" />
                
            </div>
        );
    }
}
export default Todo;