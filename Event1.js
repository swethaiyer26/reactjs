import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
constructor(props){
    super(props);
    this.state={
        data:"Initial state..."
    }
    this.updatestate=this.updatestate.bind(this);
}
updatestate(e){
    this.setState({data:"Data updated"});
}
render(){
    return(
        <div>
            <button onClick={this.updatestate}>Update</button>
            <h2>{this.state.data}</h2>
        </div>
    );
}
}
export default App;