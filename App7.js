import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            header:"header props",
            content:"content props"
        }
    }
    render(){
        return (
            <div>
                <Header headerprop={this.state.header}/>
                <Content contentprop={this.state.content}/>
            </div>
        );
    }
    }

    class Header extends React.Component{
        render(){
            return(
                <div>
                    <h1>{this.props.headerprop}</h1>
                </div>
            );
        }
    }

    class Content extends React.Component{
        render(){
            return(
                <div>
                    <h2>{this.props.contentprop}</h2>
                </div>
            );
        }
    }
    export default App;