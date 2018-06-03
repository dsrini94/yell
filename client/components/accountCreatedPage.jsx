import React ,{Component} from 'react';
import { Grid,Icon,Message } from 'semantic-ui-react'
import { Redirect } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';

import AppBar from './appBar.jsx';
import MenuBarSuccess from './menuBarSuccess.jsx';
import DividerLine from './divider.jsx';
import DividerBottom from './dividerBottom.jsx';
import AppBarMobile from './appBarMobile.jsx';
import AppBarTablet from './appBarTablet.jsx';
import Footer from './footer.jsx';

export default class AccountCreatedPage extends Component{
  constructor(props){
    super(props);
  }
  render(){
    //console.log('this.props.match.params.value',this.props.location.state.message);
  return(
    <Grid>
      <Grid.Row only='computer'>
        <Grid.Column width={16}>
          <AppBar />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only='computer'>
        <Grid.Column width={16} style={{marginTop:'-15px'}}>
          <MenuBarSuccess />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only='computer' style={{marginTop:'-25px'}}>
        <Grid.Column width={16}>
          <Message success>
            <p>
              {/* {this.props.location.state.message} */}
              You may now <span style={{textDecoration:'underline'}}>log-in</span>'
            </p>
          </Message>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only='computer'>
        <Grid.Column width={16}>
          <DividerBottom />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only='computer' style={{marginTop:'-25px'}}>
        <Grid.Column width={16}>
          <Footer />
        </Grid.Column>
      </Grid.Row>
    </Grid>

  )
}
}
