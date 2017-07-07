import React from 'react';


class USPopulation extends React.Component{
    
    
constructor(){
    super();
    this.state = {
        data: {}
    };
  }
  
  
  componentDidMount() {
    const today = new Date();
    const todayFormat = today.getFullYear() + '-' +  (today.getMonth() +1) + '-' + today.getDate(); //Oh Date object
    const countryName = this.props.country;
    const countryFormat = countryName.replace(/ /g,'%20');
    const url = 'http://api.population.io:80/1.0/population/' + countryFormat + '/' + todayFormat + '/';
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    
    fetch(proxyURL + url)
        .then((response) => response.json())
        .then((json) => 
       {
           this.setState({data: json.total_population});
           
       });
}

    
    render() {
        
            return (
               
               <div><h3>{this.props.country}</h3>
                    <span> Population as of today {this.state.data.population} </span>
                    </div>
                
                )
        
    }
    
    
    
}

export default USPopulation;