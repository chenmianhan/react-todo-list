import React from 'react';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import OnlyTodoListContainer from './containers/OnlyTodoContainer';
import { HashRouter, Route, Link } from 'react-router-dom';
import  DoneListContainer  from "./containers/DoneListContainer";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <ul>
          <li>
            <Link to='/'>all to do</Link>
          </li>
          <li>
            <Link to='/done'>done</Link>
          </li>
          <li>
            <Link to='/todo'>todo</Link>
          </li>
        </ul>

        
        {/* <CacheRoute path="/" component={Main} exact/> */}
        <Route path="/" component={TodoListContainer} exact />
        <Route path="/done" component={DoneListContainer} />
        <Route path="/todo" component={OnlyTodoListContainer} />
        <TodoFormContainer></TodoFormContainer>
      </div>
    </HashRouter>
  );
}

export default App;
