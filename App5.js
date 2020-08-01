import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    render(){
        return (
            <div>
            <h1>{this.props.headerProps}</h1>
            <h2>{this.props.contentProps}</h2>
            </div>
        );
    }
}

export default App;