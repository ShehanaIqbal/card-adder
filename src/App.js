import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} exact/>
        <Route path='/' component={Home} exact/>
        <Redirect from='/' to='/'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
