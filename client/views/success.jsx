import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';

import AppBar from '../components/appBar.jsx';
import MenuBarSuccess from '../components/menuBarSuccess.jsx';
import DividerLine from '../components/divider.jsx';
import DividerBottom from '../components/dividerBottom.jsx';
import AppBarMobile from '../components/appBarMobile.jsx';
import AppBarTablet from '../components/appBarTablet.jsx';
import Footer from '../components/footer.jsx';
import AccountCreatedPage from '../components/accountCreatedPage.jsx';

export default class Registrationpage extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  render() {
    console.log('this.props.match.params.value',this.props);

    return (
      <div>
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
          {/* <Grid.Row only='computer'>
            <Grid.Column width={16}>
              <DividerLine />
            </Grid.Column>
          </Grid.Row> */}
          <Grid.Row only='computer' style={{marginTop:'-25px'}}>
            <Grid.Column width={16}>
              <AccountCreatedPage />
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
          {/* <Grid.Row only='tablet'>
            <Grid.Column width={16}>
              <AppBarTablet />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet' style={{marginTop:'-15px'}}>
            <Grid.Column width={16}>
              <RegisterHeaderTablet />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet'>
            <Grid.Column width={16}>
              <DividerLine />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet' style={{marginTop:'-25px'}}>
            <Grid.Column width={16}>
              <RegisterFieldsTablet />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet'>
            <Grid.Column width={16}>
              <DividerBottom />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet' style={{marginTop:'-25px'}}>
            <Grid.Column width={16}>
              <Footer />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='mobile'>
            <Grid.Column width={16}>
              <AppBarMobile />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='mobile' style={{marginTop:'-15px'}}>
            <Grid.Column width={16}>
              <RegisterHeaderMobile />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='mobile'>
            <Grid.Column width={16}>
              <DividerLine />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='mobile' style={{marginTop:'-25px'}}>
            <Grid.Column width={16}>
              <RegisterFieldsMobile />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='mobile'>
            <Grid.Column width={16}>
              <DividerBottom />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='mobile' style={{marginTop:'-25px'}}>
            <Grid.Column width={16}>
              <Footer />
            </Grid.Column>
          </Grid.Row> */}
        </Grid>
      </div>
    );
  }
}
