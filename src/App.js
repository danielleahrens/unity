import React from 'react';
import './App.css';
import About from './About.js'
import Ceremony from './Ceremony.js'
import Reception from './Reception.js'
import OutOfTowners from './OutOfTowners.js'
import Registry from './Registry.js'

class App extends React.Component {

  state = {
    display: 'foo'
  }

  componentDidMount() {
    this.setState({
      display: 'About'
    })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="header-menu">
            <a className="header-menu-item" onClick={() => this.setState({display: 'About'})}>About</a>
            <a className="header-menu-item" onClick={() => this.setState({display: 'Ceremony'})}>Ceremony</a>
            <a className="header-menu-item" onClick={() => this.setState({display: 'Reception'})}>Reception</a>
            <a className="header-menu-item" onClick={() => this.setState({display: 'OutOfTowners'})}>Out of Towners</a>
            <a className="header-menu-item" onClick={() => this.setState({display: 'Registry'})}>Registry</a>
          </div>
        </header>
        <div className="body">
          {(this.state.display === 'About') ? <About /> : <div /> }
          {(this.state.display === 'Ceremony') ? <Ceremony /> : <div /> }
          {(this.state.display === 'Reception') ? <Reception /> : <div /> }
          {(this.state.display === 'OutOfTowners') ? <OutOfTowners /> : <div /> }
          {(this.state.display === 'Registry') ? <Registry /> : <div /> }

        </div>
      </div>
    );
  }
}



export default App;
