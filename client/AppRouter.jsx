import React,  {Component} from 'react';

import { HashRouter, Route, Switch} from 'react-router-dom';

import Login from './views/loginPage.jsx';
import HomePage from './views/homePage.jsx';
import DashBoard from './views/dashboard.jsx';
import Register from './views/registrationPage.jsx';
import Success from './views/success.jsx';

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
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/success/:value' component={Success} />
      </Switch>
      </HashRouter>
    );
  }
};
