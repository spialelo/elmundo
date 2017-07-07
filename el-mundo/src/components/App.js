import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import WorldPopulation from './WorldPopulation';
import USPopulation from './USPopulation';
import CheckRank from './CheckRank';
import ShortCountryPopulation from './ShortCountryPopulation';

class App extends React.Component {
  
  // constructor(){
  //   super();
  //   this.totalPop =this.totalPop.bind(this);
  //   this.state = {
  //     total:''
  //   }
  // }

  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        World Population Application
        </p>
         <WorldPopulation country="World" />
        <br/>
        <USPopulation country="United States" />
        <br/>
        <ShortCountryPopulation/>
         <br/>
         <br/>
        <CheckRank />
      </div>
    );
  }
}

export default App;
