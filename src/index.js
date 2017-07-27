import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//IMPORT COMPONENTS
import About from './components/About'
import Appetizers from './components/Appetizers'
import Desserts from './components/Desserts'
import Email from './components/Email'
import Entrees from './components/Entrees'
import Findus from './components/Findus'
import BaseLayout from './components/Layout'
import Menu from './components/Menu'


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/home' component={About}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/findus' component={Findus}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
