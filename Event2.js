import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:"Initial updated"
        }
        this.updateState=this.updateState.bind(this);
    }
    updateState(){
        this.setState({data: 'Data updated from the child component...'});
    }
    render(){
        return(
            <div>
            <Content mydata={this.state.data} updateStateProp={this.updateState}></Content>
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.updateStateProp}>Click</button>
                <h4>{this.props.mydata}</h4>
            </div>
        );
    }
}
export default App;

