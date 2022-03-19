import React from 'react';
import './App.css';
import Home from './Home.js';
import Travel from './Travel.js';
import Registry from './Registry.js';
import Faq from './Faq.js';

class App extends React.Component {

  state = {
    display: ''
  }

  componentDidMount() {
    this.setState({
      display: 'Home'
    })
  }

  updateDisplay(display) {
    this.setState({
      display: display
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
        <div className="paper">
          <div className="paper-line"/>
          <div className="pattern">
            <div className="view">
              <div className="menu">
                <div className="menu-item" onClick={() => this.updateDisplay("Home")}>Home</div>
                <div className="menu-item" onClick={() => this.updateDisplay("Travel")}>Travel</div>
                <div className="menu-item" onClick={() => this.updateDisplay("Registry")}>Registry</div>
                <div className="menu-item" onClick={() => this.updateDisplay("Faq")}>FAQ</div>
              </div>
              <div className="content">
                {(this.state.display === 'Home') ? <Home /> : <div /> }
                {(this.state.display === 'Travel') ? <Travel /> : <div />}
                {(this.state.display === 'Registry') ? <Registry /> : <div />}
                {(this.state.display === 'Faq') ? <Faq /> : <div />}
              </div>
            </div>

          </div>
        </div>

        </div>
      </div>
    );
  }
}



export default App;
