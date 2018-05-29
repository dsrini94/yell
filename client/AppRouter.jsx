import React,  {Component} from 'react';

import { HashRouter, Route, Switch} from 'react-router-dom';

import Login from './views/loginPage.jsx';
import HomePage from './views/homePage.jsx'
import DashBoard from './views/dashboard.jsx'

export default class AppRouter extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <HashRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/dashboard' component={DashBoard} />
      </Switch>
      </HashRouter>
    );
  }
};
