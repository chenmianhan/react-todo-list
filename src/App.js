import React from 'react';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';

function App() {
  return (
    <div className="App">
      <TodoListContainer></TodoListContainer>
      <TodoFormContainer></TodoFormContainer>
    </div>
  );
}

export default App;
