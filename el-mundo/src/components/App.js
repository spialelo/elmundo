import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import WorldPopulation from './WorldPopulation';
import USPopulation from './USPopulation';
import CheckRank from './CheckRank';



class App extends React.Component {
  
 /* 
 constructor(){
   super();
    this.state = {
      rank: '',
      user: ''
    }
  }
  */

  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React = Test </h2>
        </div>
        <p className="App-intro">
        World Population Application
        </p>
         <WorldPopulation country="World" />
        <br/>
        <USPopulation country="United States" />
        <br/>
        <CheckRank />
      </div>
    );
  }
}

export default App;
