import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Ceremony from './Ceremony.js';
import Travel from './Travel.js';
import Registry from './Registry.js';
import Faq from './Faq.js';
import './CeremonyApp.css';

class CeremonyApp extends React.Component {

    state = {
      display: ''
    }
  
    componentDidMount() {
      this.setState({
        display: 'Ceremony'
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
            <div className="paper-line" />
            <div classname="paper">
              <div className="pattern">
                <div className="view">
                  <div className="menu">
                    <div className="menu-item" onClick={() => this.updateDisplay("Home")}>Home</div>
                    <div className="menu-item" onClick={() => this.updateDisplay("Ceremony")}>Ceremony</div>
                    <div className="menu-item" onClick={() => this.updateDisplay("Travel")}>Travel</div>
                    <div className="menu-item" onClick={() => this.updateDisplay("Registry")}>Registry</div>
                    <div className="menu-item" onClick={() => this.updateDisplay("Faq")}>FAQ</div>
                  </div>
                  <div className="content">
                    {(this.state.display === 'Home') ? <Home /> : <div /> }
                    {(this.state.display === 'Ceremony') ? <Ceremony /> : <div /> }
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
  
  export default CeremonyApp