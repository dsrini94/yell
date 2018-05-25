import React,  {Component} from 'react';
import Login from './views/loginPage.jsx';
import HomePage from './views/homePage.jsx'
import { HashRouter, Route, Switch} from 'react-router-dom';

export default class AppRouter extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <HashRouter>
      <Switch>
        <Route path='/login' component={Login} exact/>
        <Route exact path='/' component={HomePage} />
      </Switch>
      </HashRouter>
    );
  }
};
