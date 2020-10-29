import React from 'react';
import './App.css';
import Login from "./Components/Login";
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/' component={<a>asdasd</a>}/>
      </Switch>

      <Login/>
    </div>
  );
}

export default App;
