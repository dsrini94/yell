import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import LoginHeader from '../components/loginHeader.jsx';
import LoginHeaderMobile from '../components/loginHeadermobile.jsx';
import LoginHeaderTablet from '../components/loginHeaderTablet.jsx';
import LoginFields from '../components/loginFields.jsx';
import LoginFieldsMobile from '../components/loginFieldsMobile.jsx';
import LoginFieldsTablet from '../components/loginFieldsTablet.jsx'
import AppBar from '../components/appBar.jsx';
import DividerLine from '../components/divider.jsx'

export default class Loginpage extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row only='computer'>
            <Grid.Column width={16}>
              <AppBar />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='computer'>
            <Grid.Column width={16}>
              <LoginHeader />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='computer'>
            <Grid.Column width={16}>
              <DividerLine />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='computer'>
            <Grid.Column width={16}>
              <LoginFields />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet'>
            <Grid.Column width={16}>
              <AppBar />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet'>
            <Grid.Column width={16}>
              <LoginHeaderTablet />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet'>
            <Grid.Column width={16}>
              <DividerLine />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet'>
            <Grid.Column width={16}>
              <LoginFieldsTablet />
            </Grid.Column>
          </Grid.Row>
          {/* <Grid.Row only='mobile'>
            <Grid.Column width={16}>
              <AppBar />
            </Grid.Column>
          </Grid.Row> */}
          <Grid.Row only='mobile' style={{marginTop:'7px'}}>
            <Grid.Column width={16}>
              <LoginHeaderMobile />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='mobile'>
            <Grid.Column width={16}>
              <DividerLine />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='mobile'>
            <Grid.Column width={16}>
              <LoginFieldsMobile />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
