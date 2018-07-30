import React, { Component } from 'react';
import Game from './Game';
import Numbers from './Numbers';
import PropTypes from 'prop-types';


class FinalGame extends Component {
       
    static propTypes = {
        numbersClickHandler: PropTypes.func.isRequired,
        unselectNumbers: PropTypes.func.isRequired,
        arrayOfNumbers: PropTypes.array.isRequired,
        emptyArray: PropTypes.array.isRequired,

    };


    state = {
        emptyArray : [],
        arrayOfNumbers : [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    numbersClickHandler = (item) => {
        console.log(item);
        if(this.state.emptyArray.indexOf(item) >= 0){return}
        this.setState(prevState => ({emptyArray: prevState.emptyArray.concat(item)})) 
    }
      
    
    unselectNumbers = (item) => {
        console.log(item);
        this.setState((prevState) => ({emptyArray: prevState.emptyArray
            .filter((number) => number!== item)
        }));
    }
   


    render(){
        return (
        <div className="App">
            
            <Numbers 
            arrayOfNumbers = {this.state.arrayOfNumbers}
            numbersClickHandler = {this.numbersClickHandler}
            emptyArray = {this.state.emptyArray}
            />
            
            <Game 
            emptyArray = {this.state.emptyArray}
            unselectNumbers = {this.unselectNumbers}
            />
        </div>
        )
    }

}

export default FinalGame;