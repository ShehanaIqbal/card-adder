import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login} exact/>
        <Redirect from='/' to='/'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
