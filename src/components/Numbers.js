import React, { Component } from 'react';

import '../App.css';


const style = {
    border: "5px dotted lime",
    width: "0 auto",
    height: "5em",
}

class Numbers extends Component {
    
    checkClassName = (item) => {
        if(this.props.emptyArray.indexOf(item) >= 0){
            return "selected"
        }
    }

    render(){
        let numberOutput = this.props.arrayOfNumbers && this.props.arrayOfNumbers.map((item, i) => <span key={i} onClick = {() => this.props.numbersClickHandler(item)} className={this.checkClassName(item)}>{item}</span> )    
        return(
            <div style={style}>
                {numberOutput}
            </div>
        )
    }
};

export default Numbers;