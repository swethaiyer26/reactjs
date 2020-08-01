import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
        this.setStateHandler=this.setStateHandler.bind(this);
    };
    setStateHandler(){
        var item="setState..."
        var myarray=this.state.data.slice();
        myarray.push(item);
        this.setState({data:myarray})
    };
    render(){
        return(
            <div>
                <button onClick={this.setStateHandler}>Click</button>
                <h2>State Array :{this.state.data}</h2>
            </div>
        );
    }
}
export default App;
