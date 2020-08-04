import React from 'react'
class TodoForm extends React.Component {

    handleChange = (e) => {
        // let newlength = Number(e.target.value);
        // // store.dispatch({type: INIT, length})
        // this.props.init(newlength)
        // this.setState({
        //     length : newlength
        // });
    }
    handleSubmit=(e)=>{

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