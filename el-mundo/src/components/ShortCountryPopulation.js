import React from 'react';


class ShortCountryPopulation extends React.Component{
    
    
constructor(){
    super();
    this.state = {
        data: [],
        countries: [
    'Afghanistan',
    'AFRICA',
    'Albania',
    'Algeria',
    'Angola',
    'Antigua and Barbuda',
    'Arab Rep of Egypt',
    'Argentina',
    'Armenia',
    'Aruba',
    'ASIA',
    'Australia',
    'Austria',
    'Azerbaijan',
    'The Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cote-d-Ivoire',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Caribbean',
    'Central African Republic',
    'Central America',
    'Central Asia',
    'Chad',
    'Channel Islands',
    'Chile',
    'China',
    'Hong Kong SAR-China',
    'Macao SAR China',
    'Colombia',
    'Comoros',
    'Congo',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Curacao',
    'Cyprus',
    'Czech Republic',
    'Dem Peoples Rep of Korea',
    'Dem Rep of Congo',
    'Denmark',
    'Djibouti',
    'Dominican Republic',
    'Eastern Africa',
    'Eastern Asia',
    'Eastern Europe',
    'Ecuador',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'EUROPE',
    'Federated States of Micronesia',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'FYR Macedonia',
    'Gabon',
    'The Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Islamic Republic of Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyz Republic',
    'Lao PDR',
    'LATIN AMERICA AND THE CARIBBEAN',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Less developed regions',
    'Less developed regions, excluding China',
    'Liberia',
    'Libya',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Melanesia',
    'Mexico',
    'Micronesia',
    'Middle Africa',
    'Moldova',
    'Mongolia',
    'Montenegro',
    'More developed regions',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nepal',
    'The Netherlands',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Northern Africa',
    'NORTHERN AMERICA',
    'Northern Europe',
    'Norway',
    'OCEANIA',
    'Oman',
    'Other non-specified areas',
    'Pakistan',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Polynesia',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'RB-de-Venezuela',
    'Rep of Korea',
    'Rep of Yemen',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'St-Lucia',
    'St-Vincent and the Grenadines',
    'Samoa',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovak Republic',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South America',
    'South Sudan',
    'South-Central Asia',
    'South-Eastern Asia',
    'Southern Africa',
    'Southern Asia',
    'Southern Europe',
    'Spain',
    'Sri Lanka',
    'West Bank and Gaza',
    'Sub-Saharan Africa',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syrian Arab Rep',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'US Virgin Islands',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vietnam',
    'Western Africa',
    'Western Asia',
    'Western Europe',
    'Western Sahara',
    'World',
    'Zambia',
    'Zimbabwe'
  ]
    }
  }
  
  
  
  componentDidMount() {
     const countriesArray = this.state.countries;
    let sum = 0;
      
    const today = new Date();
    const todayFormat = today.getFullYear() + '-' +  (today.getMonth() +1) + '-' + today.getDate(); //Oh Date object
   
   
    let linkArray = [];
    let popuArray = [];
    
    function wait(delay = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    });
}
  
    countriesArray.forEach(function(element){
        
         let countryFormat = element.replace(/ /g,'%20');
         let url = 'http://api.population.io:80/1.0/population/' + countryFormat + '/' + todayFormat + '/';
        linkArray.push(url);
        
    });
}

    
    render() {
        
            return (
               
               <div>
               <h3>Shortest Country Names</h3>
               <p>Populations of countries with shortest names</p>
                    <span>{this.props.country} Population as of today {this.state.data.population} </span>
                </div>
                )
        
    }
    
    
    
}

export default ShortCountryPopulation;