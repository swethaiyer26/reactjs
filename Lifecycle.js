import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            data:0
        }
        this.setNewNumber=this.setNewNumber.bind(this)
    };
    setNewNumber(){
        this.setState({data:this.state.data + 1})
    }
    render(){
        return(
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        );
    }
}
class Content extends React.Component{
    componentWillMount(){
        console.log('Component will mount')
    }
componentDidMount(){
    console.log('Component did mount')
}
componentWillReceiveProps(newProps){
    console.log('component will recieve props')
}
shouldComponentUpdate(newProps,newState){
    return true;
}
componentWillUpdate(nextProps,nextState){
    console.log('Component will update')
}

componentDidUpdate(prevProp,prevState){
    console.log('Component did update')
}
componentWillUnmount(){
    console.log('Component will unmount')
}
render(){
    return(
        <div>
            <h3>{this.props.myNumber}</h3>
        </div>
    );
}
}
export default App;