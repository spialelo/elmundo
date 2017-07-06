import React from 'react';


class ShortCountry extends React.Component {
    render(){
        let country = this.props.country;
       

        
        return(
            <li className="country">
         
            {country}
            </li>
            
            )
    }
}

export default ShortCountry;