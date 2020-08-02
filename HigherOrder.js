import React from 'react';
import ReactDom from 'react-dom';

var newData={
    data:'Data from HOC...',
}

var myHOC=ComposedComponent => class extends React.Component{
    componentDidMount(){
        this.setState({data:newData.data});
    }
    render(){
        return<ComposedComponent {...this.props} {...this.state}/>
    }
};

class MyComponent extends React.Component {
    render() {
       return (
          <div>
              <h1>{this.props.data}</h1>
              </div>
       )
    }
}
export default myHOC(MyComponent);