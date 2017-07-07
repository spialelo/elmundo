import React from 'react';


class ShortCountry extends React.Component {
    
    constructor(){
        super();
        //this.getRank = this.getRank.bind(this);
        this.state = {
            sCountry: '',
            totPop: '',
            fPop: '',
            mPop:'',
            finalInfo:[],
            finTotal: '',
            index: ''
        }
    }
    
    
//       componentDidMount() {
//         this.getRank();
//   }
    
    
    
    getRank(event){
            event.preventDefault()
               let infoArray = [];
                let sum = 0;
                let country = this.props.country;
                let index = this.props.index;
  
                   let url =  `http://api.population.io:80/1.0/population/2017/${country}/18`;
                   fetch(url)
                    .then((response) => response.json())
                    .then((json) => 
                        {
                            console.log('json received');
                            infoArray.push(json[0]); 
                            console.log(infoArray);
                            this.setState({finalInfo: infoArray},()=>this.state.finalInfo);
                            //console.log(this.state.finalInfo); - has the complete array
                          
                           
                   })
                   .then(()=> {
                       for(let i=0; i <infoArray.length; i++){
                           sum+=infoArray[i].total;
                            console.log(`Country: ${infoArray[i].country}-Total population: ${infoArray[i].total}-Male Population: ${infoArray[i].males}-Female Population: ${infoArray[i].females}`);
                            this.setState({sCountry:infoArray[i].country, totPop:infoArray[i].total, mPop:infoArray[i].males, fPop:infoArray[i].females});
                   }
                   });
                   
                   

               this.setState({finTotal: sum},()=>this.state.finTotal);
               this.setState({index},()=>this.state.index);
               
               //console.log(this.state.finalInfo);
               
    }
    
    
    render(){
      
        return(
          
            <li className="country" onClick={(e) => this.getRank(e)} style={{listStyle: 'none', border: '2px solid #333'}}>

             <div className="country-rank-results active">
                            <p>Country: {this.state.sCountry}</p>
                            <p>Total: {this.state.totPop}</p>
                            <p>Male population: {this.state.mPop}</p>
                            <p>Female population: {this.state.fPop}</p>
                        </div>
            </li>
            
            )
    }
}

export default ShortCountry;