import React,  {Component} from 'react';
import Login from './views/loginPage.jsx';
import HomePage from './views/homePage.jsx';
import Register from './views/registrationPage.jsx';
import { HashRouter, Route, Switch} from 'react-router-dom';

export default class AppRouter extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <HashRouter>
      <Switch>
        <Route exact path='/' component={HomePage} exact />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
      </HashRouter>
    );
  }
};
