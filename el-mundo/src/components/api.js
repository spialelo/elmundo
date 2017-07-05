
export function  getUSPopulation(){
        
        let today = new Date().toISOString();
        let todayFormat = today.substring(0, today.indexOf('T'));
        let url = 'http://api.population.io:80/1.0/population/United%20States/' + todayFormat + '/';
        
        return fetch(url)
            .then(res => res.json())
            .then(data => console.log(data));
        
        
    }
    
