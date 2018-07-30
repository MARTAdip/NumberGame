import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';

import MainRoutes from './components/MainRoutes';
import './App.css';


class App extends Component {

    
    
    render() {
        return (
        <div className="App">
            <Navigation />
            <MainRoutes />
            
        </div>
        );
    }
}

export default App;
