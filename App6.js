import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.headerprop}</h1>
                <h2>{this.props.contentprop}</h2>
            </div>
        );
    }
}
 App.defaultProps={
     headerprop:"header from props...",
     contentprop:"content from props"
 }

 export default App;