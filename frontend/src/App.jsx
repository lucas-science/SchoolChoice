import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Home from './components/home';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Routes>
                <Route path="/" exact component={Home}/>
                <Route path="/lol" exact component={Home}/>
            </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
