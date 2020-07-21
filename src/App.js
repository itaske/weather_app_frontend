import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
    <Route component={LoginForm} exact path="/login"/>
    <Route component={SignUpForm} exact path="/"/>
    <Route component={SignUpForm} exact path="/signup"/>
    <Route component={Dashboard} exact path="/dashboard"/>
</Router>
  )
}

export default App;
