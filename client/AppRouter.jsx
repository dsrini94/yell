import React,  {Component} from 'react';
import Login from './components/loginPage.jsx';
import { HashRouter, Route, Switch} from 'react-router-dom';
export default class AppRouter extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <HashRouter>
      <Switch>
        <Route path='/' component={Login} exact/>
      </Switch>
      </HashRouter>
    );
  }
};
