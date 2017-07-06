import React from 'react';
import ShortCountry from './ShortCountry';


class ShortCountryPopulation extends React.Component{
    
    
constructor(){
    super();
    this.state = {
        data:[],
        short: [],
        shortCount:[],
        shortCount: '',
        completeTotal: '',
        totalArray: [],
        finalInfo: []
    }
  }
  

  


submitShortFetch(event){
       
        event.preventDefault();
       const url = 'http://api.population.io/1.0/countries/?format=json';
       const proxyURL = 'https://cors-anywhere.herokuapp.com/';

    //  let index = this.props.index;       
     let shortArray = [];
     let totalArray = [];  
    
    
  fetch(proxyURL + url)
        .then((response) => response.json())
        .then((json) => {
            this.setState({data: json.countries});
            //console.log(this.state.data);
        })
        .then(()=> {
               const allCountries = [...this.state.data];
               
               
            allCountries.forEach((country)=>{
                   if( (country.length <= 4) && country !== 'ASIA'  && country !== 'Asia'){
                       shortArray.push(country);
                   }
               });
               
               this.setState({short: shortArray});
               this.setState({shortCount: shortArray.length});

       
    })
   .then(()=>{
  
                let addSum = 0;
                let urls = shortArray.map((val, index) => {
                      
                      //console.log(`http://api.population.io:80/1.0/population/2017/${val}/18`)  
                      return `http://api.population.io:80/1.0/population/2017/${val}/18`
                    
                })
               // console.log(fetchArr);
               let completeTotal = urls.map(v =>{
                   let tempTotal = []
                   return fetch(v).then((response) => response.json())
                   })
                   .then((json) => {
                      
                        return json[0].total
                    //   let arr = [...tempTotal]

                    //   this.setState({totalArray: arr})
                   })
               .reduce((sum, init) => {sum + init},0)
               .then((finTotal)=> {
                   console.log(finTotal);
               })
               
               //console.log('Final total pop of all countries: ' + completeTotal)
});

}

//population={this.state.finalInfo[index].total} males={this.state.finalInfo[index].males} females={this.state.finalInfo[index].females}

    render() {
        
            return (
               
               <div>
               <h3>Shortest Country Names</h3>
               <p>Populations of countries with shortest names</p>
                    <span>Count: {this.state.shortCount} | Overall Total Population: Blank </span>
                    <button className="active" onClick={(e)=>this.submitShortFetch(e)}>Fetch</button>
                   <ul>
                     {/*Object.keys(this.state.short)
                                .map(key => <ShortCountry key={key} index={key} country={this.state.short[key]} />)
                         this.state.short.map((i) => {console.log(i)})
                     */
                     
                         
                     }
                        </ul>       
                </div>
                )
        
    }
    
    
    
}

export default ShortCountryPopulation;