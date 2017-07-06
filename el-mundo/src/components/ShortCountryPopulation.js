import React from 'react';
import ShortCountry from './ShortCountry';


class ShortCountryPopulation extends React.Component{
    
    
constructor(){
    super();
    this.state = {
        data:[],
        short: [],
        shortCount: '',
        finalInfo: []
    }
  }
  
  
  
  
  
componentDidMount() {
        
        
  
}


submitShortFetch(event){
       
        event.preventDefault();
       const url = 'http://api.population.io/1.0/countries/?format=json';
       const proxyURL = 'https://cors-anywhere.herokuapp.com/';
   
   
       let headers = {
              'X-Requested-With':'XMLHttpRequest',
               'Origin': 'http://api.population.io'
           };
      let shortArray = [];
//{headers: new Headers({'Content-Type': 'text/plain'})})
    
  fetch(proxyURL + url)
        .then((response) => response.json())
        .then((json) => {
            this.setState({data: json.countries});

        })
        .then(()=> {
               const allCountries = this.state.data;
            allCountries.forEach((country)=>{
                   if( (country.length <= 4) && country !== 'ASIA'  && country !== 'Asia'){
                       shortArray.push(country);
                   }
               });
               this.setState({short: shortArray});
               this.setState({shortCount: shortArray.length});
        })
        .catch((error) => {console.log(error)});

    }
    


    
    render() {
        
            return (
               
               <div>
               <h3>Shortest Country Names</h3>
               <p>Populations of countries with shortest names</p>
                    <span>Count: {this.state.shortCount}</span>
                    <button className="active" onClick={(e)=>this.submitShortFetch(e)}>Fetch</button>
                   <ul>
                     {Object
                                .keys(this.state.short)
                                .map(key => <ShortCountry key={key} index={key} country={this.state.short[key]} />)
                         
                     }
                        </ul>       
                </div>
                )
        
    }
    
    
    
}

export default ShortCountryPopulation;