import React, { Component } from 'react';
import ReactDom from 'react-dom';

class myForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:"Initial State...."
        }
        this.updateState=this.updateState.bind(this)
    };
    updateState(e){
        this.setState({data:e.target.value});
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.data} onChange={this.updateState}/>
                <h3>{this.state.data}</h3>
            </div>
        );
    }
}
export default myForm;