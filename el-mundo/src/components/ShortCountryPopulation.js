import React from 'react';
import ShortCountry from './ShortCountry';


class ShortCountryPopulation extends React.Component{

  constructor() {
    super();
    this.submitShortFetch = this.submitShortFetch.bind(this);
    this.count = this.count.bind(this);
    this.shortCount = this.shortCount.bind(this);
    this.finalTotal = this.finalTotal.bind(this);
    this.reduce = this.reduce.bind(this);

    this.state = {
      data: [],
      short: [],
      //shortCount: [],
      shortCount: '',
      completeTotal: '',
      finalInfo: [],
      urls: [],
      count: [],
      allPopulation: '',
    showCount: 'none'
    };
  }

  componentDidMount() {
     this.submitShortFetch();
     
  }
  
  

  reduce() {
      
    const arr = [...this.state.count];

    const finalcount = arr.reduce((sum, next) => {
      return sum + next;
    }, 0);
    console.log(finalcount);
    
    this.setState({ allPopulation: finalcount });
     document.querySelector('span > span').style.display = 'inline';
  }

  finalTotal() {
    let finalTotals = [...this.state.urls];
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';

    let arr = [];
    let totals = finalTotals.forEach(v => {
      fetch(proxyURL + v).then(response => response.json()).then(json => {
        arr.push(json[0].total);
        this.setState({ count: arr });
        // console.log(this.state.count);
      });
    });
  }

  shortCount() {
    const shortCountries = [...this.state.short];

    let urls = shortCountries.map((val, index) => {
      return `http://api.population.io:80/1.0/population/2017/${val}/18`;
    });
    //   console.log(urls)
    this.setState({ urls });
    this.finalTotal();
  }

  count() {
    const allCountries = [...this.state.data];
    let shortArray = [];
    allCountries.forEach(country => {
      if (country.length <= 4 && country !== 'ASIA' && country !== 'Asia') {
        shortArray.push(country);
      }
    });
    this.setState({ short: shortArray });
    this.setState({ shortCount: shortArray.length });
    //     console.log(this.state.short);
    //     console.log(this.state.shortCount);
    this.shortCount();
  }

  submitShortFetch() {
    const url = 'http://api.population.io/1.0/countries/?format=json';
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';

    fetch(proxyURL + url).then(response => response.json()).then(json => {
      this.setState({ data: json.countries });
      this.count();
      //       console.log(this.state.data);
    });
  }
  
  
  

    render() {
        
    let countStyle = {
      display: this.state.showCount
  };
  
  let ulStyle = {
      display: this.state.showList
  }
      
        
  
            return (
               
               <div>
               <h3>Shortest Country Names</h3>
               <p>Populations of countries with shortest names. Click to reveal the overall population. <br/>If you click each row, you will see the population break out based on male and female.</p>
                    <span>Count: <span style={countStyle}>{this.state.shortCount}</span> | Overall Total Population: {this.state.allPopulation} </span>
                    <button className="active" onClick={this.reduce}>Fetch</button>
                   <ul>
                     {Object.keys(this.state.short)
                                .map(key => <ShortCountry key={key} index={key} country={this.state.short[key]} />)

                     }
                        </ul>       
                </div>
                )
        
    }
    
    
    
}

export default ShortCountryPopulation;