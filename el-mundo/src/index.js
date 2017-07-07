import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {BrowserRouter, Match, Miss} from 'react-router'; //router is a component
import WorldPopulation from './components/WorldPopulation'; //import WorldPopulation component we created
import NotFound from './components/NotFound';


const Root = () => {
    return(
        <BrowserRouter>
        
        {/*Match cannot be direct child of BrowserRouter, therefore wrapped in div*/}
          <div>
            <Match exactly pattern="/" component={App}/>{/*When on homepage*/}
            <Match pattern="/population/results" component={WorldPopulation}/>{/*Population results*/}
            <Miss component={NotFound}/>
          </div>
        </BrowserRouter>
        )
}




ReactDOM.render(
  <Root />,
  document.getElementById('root')
);