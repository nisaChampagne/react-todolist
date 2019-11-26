import React from 'react';
import Todo from './components/todo'
import './App.css';

import HomePage from './components/HomePage';
import Magic from './components/Home'
import NavBar from './components/NavBar'
import GroceryTodo from './components/GroceryList'
import Badges from './components/modalpopup/Badges'
import Modals from './components/modalpopup/Modal';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/popup" component={Badges} />
        <Route path="/modal" component={Modals} />
        <Route exact path='/magic8ball' component={Magic}/>
        <Route path='/todo' component={Todo} />
        <Route path='/grocerylist' component={GroceryTodo} />
      </Switch>
    </div>
  );
}

export default App;
