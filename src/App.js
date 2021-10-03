import React from 'react';
import './App.css';
import Home from './Home.js'

class App extends React.Component {

  state = {
    display: ''
  }

  componentDidMount() {
    this.setState({
      display: 'Home'
    })
  }

  callbackFunction(displayComponent) {
    this.setState(state => ({
      display: displayComponent
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="body">
          {(this.state.display === 'Home') ? <Home /> : <div /> }
        </div>
      </div>
    );
  }
}



export default App;
