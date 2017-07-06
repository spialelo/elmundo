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
        .then(()=>{
            const shortList = this.state.short;
             //http://api.population.io:80/1.0/population/2017/Brazil/18/
             const infoArray = [];
             
             shortList.forEach((sCountry)=>{
                 let url = `http://api.population.io:80/1.0/population/2017/${sCountry}/18`;
                 fetch(url)
                .then((response) => response.json())
                .then((json) => 
                    {
                        infoArray.push(json);
                       
                   });
                 });
                    this.setState({finalInfo: infoArray}, function(){
                       return this.state.finalInfo;
             })
        
        })
        .catch((error) => {console.log(error)});

    }
    

 getRank(key){
        //make copy of state
        const finalInfo= [...this.state.finalInfo];
        //get data
            const shortList = this.state.short;
             //http://api.population.io:80/1.0/population/2017/Brazil/18/
             const infoArray = [];
            
                 let url = `http://api.population.io:80/1.0/population/2017/${shortList[key]}/18`;
                 fetch(url)
                .then((response) => response.json())
                .then((json) => 
                    {
                        infoArray[key].push(json);
                       
                   });
               
                 
                 //update state
                    this.setState({finalInfo: infoArray}, function(){
                       return this.state.finalInfo;
             })
     
   
        
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
                                .map(key => <ShortCountry key={key} index={key} country={this.state.short[key]} getRank = {this.getRank}/>)
                         
                     }
                        </ul>       
                </div>
                )
        
    }
    
    
    
}

export default ShortCountryPopulation;