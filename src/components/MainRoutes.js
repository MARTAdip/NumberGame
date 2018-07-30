import React, { Component } from 'react';
import {  Route, Link, Switch } from 'react-router-dom';
import FinalGame from './FinalGame'
import HomePage from './HomePage'
import About from './About'
import '../App.css';

const MainRoutes = () => (
<Switch>
    <Route exact path = '/' component = {HomePage} />
    <Route path='/home' component= {HomePage} />
    <Route path='/game' component= {FinalGame} />
    <Route path='/about' component={About} /> 
</Switch>

)

export default MainRoutes;