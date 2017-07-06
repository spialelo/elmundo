import React from 'react';


class ShortCountry extends React.Component {
    
    
    constructor(){
    super();
    this.state = {
       data: {}
    }
  }
  
    
    
     getRank(event){
         event.preventDefault();
        //make copy of state
        //const finalInfo= [...this.state.finalInfo];
        //get data
            //const shortList = this.state.short;
             //http://api.population.io:80/1.0/population/2017/Brazil/18/
             //const infoArray = [];
            
                /* let url = `http://api.population.io:80/1.0/population/2017/${shortList[this.props.index]}/18`;
                 fetch(url)
                .then((response) => response.json())
                .then((json) => 
                    {
                        infoArray[this.props.index].push(json);
                       
                   });
               
                 
                 //update state
                    this.setState({finalInfo: infoArray}, function(){
                       return this.state.finalInfo;
             })*/
             
             
             console.log('clicked');
     
   
        
    }

    
    
    render(){
        let country = this.props.country;
        let index = this.props.index;

        
        return(
            <li className="country"  onClick={(e)=>this.getRank(e)}>
         
            {country} is at index: {index}
            </li>
            
            )
    }
}

export default ShortCountry;