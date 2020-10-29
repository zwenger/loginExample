import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from "./Components/Utils/PrivateRoute";
import Main from "./Components/MainPage/Main";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/' component={Main}/>
      </Switch>
    </div>
  );
}

export default App;
