import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import RegisterHeader from '../components/registerHeader.jsx';
import RegisterHeaderMobile from '../components/registerHeaderMobile.jsx';
import RegisterHeaderTablet from '../components/registerHeaderTablet.jsx';
import RegisterFields from '../components/registerFields.jsx';
import RegisterFieldsMobile from '../components/registerFieldsMobile.jsx';
import RegisterFieldsTablet from '../components/registerFieldsTablet.jsx';
import AppBar from '../components/appBar.jsx';
import DividerLine from '../components/divider.jsx';
import AppBarMobile from '../components/appBarMobile.jsx';
import AppBarTablet from '../components/appBarTablet.jsx'

export default class Registrationpage extends Component {
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
              <RegisterHeader />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='computer'>
            <Grid.Column width={16}>
              <DividerLine />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='computer'>
            <Grid.Column width={16}>
              <RegisterFields />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet'>
            <Grid.Column width={16}>
              <AppBarTablet />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet'>
            <Grid.Column width={16}>
              <RegisterHeaderTablet />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet'>
            <Grid.Column width={16}>
              <DividerLine />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet'>
            <Grid.Column width={16}>
              <RegisterFieldsTablet />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='mobile'>
            <Grid.Column width={16}>
              <AppBarMobile />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='mobile' style={{marginTop:'7px'}}>
            <Grid.Column width={16}>
              <RegisterHeaderMobile />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='mobile'>
            <Grid.Column width={16}>
              <DividerLine />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='mobile'>
            <Grid.Column width={16}>
              <RegisterFieldsMobile />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
