import React from 'react';
import './App.css';
import About from './About.js'
import Ceremony from './Ceremony.js'
import Reception from './Reception.js'
import OutOfTowners from './OutOfTowners.js'
import Registry from './Registry.js'
import Rsvp from './Rsvp.js'
import Faq from './Faq.js'

class App extends React.Component {

  state = {
    display: 'foo'
  }

  componentDidMount() {
    this.setState({
      display: 'About'
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
        <header className="header">
          <div className="header-menu">
            <a className={(this.state.display === 'About') ? 'header-menu-item on-focus' : 'header-menu-item'} onClick={() => this.setState({display: 'About'})}>About Us</a>
            {/* <a className="header-menu-item" onClick={() => this.setState({display: 'Ceremony'})}>Ceremony</a> */}
            <a className={(this.state.display === 'Reception') ? 'header-menu-item on-focus' : 'header-menu-item'} onClick={() => this.setState({display: 'Reception'})}>Reception</a>
            <a className={(this.state.display === 'OutOfTowners') ? 'header-menu-item on-focus' : 'header-menu-item'} onClick={() => this.setState({display: 'OutOfTowners'})}>Things To Do</a>
            <a className={(this.state.display === 'Registry') ? 'header-menu-item on-focus' : 'header-menu-item'} onClick={() => this.setState({display: 'Registry'})}>Registry</a>
            <a className={(this.state.display === 'Faq') ? 'header-menu-item on-focus' : 'header-menu-item'} onCLick={() => this.setState({display: 'Faq'})}>FAQ</a>
          </div>
        </header>
        <div className="body">
          {(this.state.display === 'About') ? <About /> : <div /> }
          {/* {(this.state.display === 'Ceremony') ? <Ceremony ceremonyCallback = {this.callbackFunction.bind(this)}/> : <div /> } */}
          {(this.state.display === 'Reception') ? <Reception receptionCallback = {this.callbackFunction.bind(this)}/> : <div /> }
          {(this.state.display === 'OutOfTowners') ? <OutOfTowners /> : <div /> }
          {(this.state.display === 'Registry') ? <Registry /> : <div /> }
          {(this.state.display === 'Rsvp') ? <Rsvp eventType = {this.state.display}/> : <div /> }
          {(this.state.display === 'Faq') ? <Faq eventType = {this.state.display}/> : <div /> }
        </div>
      </div>
    );
  }
}



export default App;
