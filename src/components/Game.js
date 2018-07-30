import React, { Component } from 'react';

import '../App.css';

const style = {
    border: "5px dotted lime",
    width: "0 auto",
    height: "5em",
    marginTop: "2em"
    
}

class Game extends Component {
    
  render(){
       const template = this.props.emptyArray.map((num, i) => {
        return <span key={i} onClick = {() => this.props.unselectNumbers(num)}>{num}</span>
    })

      return(
          <div className="App">
              <div style={style}>{template}</div>
          </div>
        )
    }
};
    
export default Game;

