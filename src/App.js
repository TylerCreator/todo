import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dreamer from './dreamer.jpeg';
import Nav from './pagedraw/navigation';

import M from './pagedraw/main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nav: [{content: "статьи", active:true}, {content: "карта"},{content: "контакты"}]
    };
  }

  render() {
    const nav = this.state.nav.map((nav, i) => {
      return {...nav, onClick: (() => this.onClick(i))}
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Nav list={nav}/>
        </div>
        <div>
          <M views={20} title="остров Ольхон" image={dreamer} additional="Остров Ольхон - лучшее место для отдыха"/>
        </div>
        
      </div>
    );
  }
  onClick(id) {
    this.setState({nav: this.state.nav.map((nav, i) =>
      i === id ? {...nav, active: true} : {...nav, active: false}
    )});
  }
}


export default App;
