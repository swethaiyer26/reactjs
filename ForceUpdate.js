import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
        this.forceUpdateHandler=this.forceUpdateHandler.bind(this);
    };
    forceUpdateHandler(){
        this.forceUpdate();
    };
    render(){
        return(
            <div>
        <button onClick={this.forceUpdateHandler}>Update</button>
        <h2>Random number:{Math.random()}</h2>
            </div>
        );
    }
}
export default App;