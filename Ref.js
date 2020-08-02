import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:''
        }
        this.updateState=this.updateState.bind(this);
        this.clearInput=this.clearInput.bind(this);
    }
    updateState(e){
        this.setState({data:e.target.value});
    }
    clearInput(){
        this.setState=({data:''});
        ReactDom.findDOMNode(this.refs.myinput).focus();
    }
    render(){
        return(
            <div>
            <input type={this.state.data} onChange={this.updateState} ref="myinput"/>
            <button onClick={this.updateState}>Click</button>
            <h3>{this.state.data}</h3>
            
            </div>
        );
    }
}
export default App;