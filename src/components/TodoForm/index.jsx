import React from 'react'
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
      }
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.addTodo(this.state.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange} />
              <input type="submit" value="add" />
          </form>
        );
    }
}
export default TodoForm;