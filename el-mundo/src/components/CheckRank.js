import React from 'react';


class CheckRank extends React.Component{



    constructor(){
        super();
        this.state = {
            birthdate: '',
            gender: '',
            rank: ''
        };
      }
      
  
    
    submitRank(event){
       
        event.preventDefault();
        console.log('user input rank criteria');
        const rank = this.state.rank;
        const birthdate = this.state.birthdate;
        const gender = this.state.gender;
        const userBirthdate = this.birthdate.value,  displayGender = this.gender.value, formatGender= displayGender.toLowerCase();
        
        const birthdateFormat = userBirthdate.split('-');
        let year = birthdateFormat[2];
        let month = birthdateFormat[0];
        let day = birthdateFormat[1];
        const finaldateFormat = year + '-' +  month + '-' + day;
        
        const url = 'http://api.population.io:80/1.0/wp-rank/' + finaldateFormat + '/' +formatGender + '/World/today/';
        //http://api.population.io:80/1.0/wp-rank/1986-04-26/female/World/today/
    
          
        console.log(url);
    
            fetch(url)
                .then((response) => response.json())
                .then((json) => 
               {
                   this.setState({rank: json.rank}, function(){
                       console.log('user rank' + ' - ' + this.state.rank);
                   });
                   
               });
            
            this.setState({birthdate: userBirthdate, gender:displayGender});
            

    }
    



    clearRank(event) {
        event.preventDefault();
        const rank = this.state.rank;
        const birthdate = this.state.birthdate;
        const gender = this.state.gender;
        
        this.setState({rank:'', birthdate: '', gender: ''});
        this.rankForm.reset();
         console.log('Fields reset');
    }


    /*use css to hide and display divs/buttons when methods are called*/

    
    render() {
        
            return (
                
               <div className="check-rank">
                    <h3>Check Your Ranking</h3>
                    <p>Enter your information to check where you rank</p>
                    
                     <form ref={(input) => this.rankForm = input} className="rank-criteria">
                         <input ref={(input) => this.birthdate = input} type="text" placeholder="Birthdate (Format: MM-DD-YYYY)" />
                         <select ref={(input) => this.gender = input}>
                         <option value="Female">Female</option>
                         <option value="Male">Male</option>
                         </select>
                         <button className="active" onClick={(e)=>this.submitRank(e)}>Fetch</button>
                         <br/>
                           <div className="rank-results active">
                            <p>Date of Birth: {this.state.birthdate}</p>
                            <p>Gender: {this.state.gender}</p>
                            <p>Your Rank in the World<br/> You are ranked: {this.state.rank}</p>
                        </div>
                         <br/>
                         <button className="hidden" type="" onClick={(e)=>this.clearRank(e)}>Clear</button>
                         <br/>
                         <br/>
                    </form>
                    
                   
                </div>
                
                )
        
    }
    
    
    
}

export default CheckRank;