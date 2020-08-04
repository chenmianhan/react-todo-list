import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';

function App() {
  return (
    <div className="App">
       <TodoListContainer/>
       <TodoFormContainer/>
    </div>
  );
}

export default App;
