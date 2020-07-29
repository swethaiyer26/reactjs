import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}
class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return (
            <div>
                <h2>How are you</h2>
            </div>
        );
    }
}
export default App;