import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
        this.FindDomNodeHandler=this.FindDomNodeHandler.bind(this);
    };
    FindDomNodeHandler(){
        var mydiv=document.getElementById('mydiv');
        ReactDom.findDOMNode(mydiv).style.color='green';
    }
    render(){
        return(
            <div>
            <button onClick={this.FindDomNodeHandler}>FindNode</button>
            <div id="mydiv">Node</div>
            </div>
        );
    }
}
export default App;