import React from 'react';


class ShortCountryPopulation extends React.Component{
    
    
constructor(){
    super();
    this.state = {
        data:[],
        short: []
    }
  }
  
  
  
   componentDidMount() {
        //using proxy url because Access-Control-Allow-Origin response header not present at source api
    const url = 'http://api.population.io/1.0/countries/?format=json';
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
   
   
   let headers = {
          'X-Requested-With':'XMLHttpRequest',
           'Origin': 'http://api.population.io'
       };
       

  
//{headers: new Headers({'Content-Type': 'text/plain'})})
    
  fetch(proxyURL + url, headers)
        .then((response) => response.json())
        .then((json) => {
            this.setState({data: json});
            console.log(json);
        }).catch((error) => {console.log(error)});
        
        
  
}
    
    render() {
        
            return (
               
               <div>
               <h3>Shortest Country Names</h3>
               <p>Populations of countries with shortest names</p>
                    <span> | </span>
                </div>
                )
        
    }
    
    
    
}

export default ShortCountryPopulation;