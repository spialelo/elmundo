import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import WorldPopulation from './WorldPopulation';
import USPopulation from './USPopulation';
import CheckRank from './CheckRank';
import ShortCountryPopulation from './ShortCountryPopulation';

class App extends React.Component {
  

 /*constructor(){
   super();
    this.getRank =this.getRank.bind(this);
    this.state = {
        countries: {}
    }
  }*/



/*getRank(currentCountry){
    
    
    //http://api.population.io:80/1.0/population/2017/Brazil/18/
    
    fetch(url)
        .then((response) => response.json())
        .then((json) => 
       {
           this.setState({data: json.total_population}, function(){
               return this.state.data.population;
           });
           
       });
    
    
}*/

  
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
        <ShortCountryPopulation />
         <br/>
         <br/>
        <CheckRank />
      </div>
    );
  }
}

export default App;
