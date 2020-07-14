import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'


function App() {
  return (
    <Router>
    <Route component={LoginForm} exact path="/login"/>
</Router>
  )
}

export default App;
