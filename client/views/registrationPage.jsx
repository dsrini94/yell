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
import DividerBottom from '../components/dividerBottom.jsx';
import AppBarMobile from '../components/appBarMobile.jsx';
import AppBarTablet from '../components/appBarTablet.jsx';
import Footer from '../components/footer.jsx';

export default class Registrationpage extends Component {
  constructor(){
    super();
    this.state={
      account:'',
      passcode:'',
      mailId:''
    }
  }
  componentDidMount(){
    console.log("query string register--->",((this.props.location.search).replace("?","")).split("&"));
    var account;
    var passcode;
    var mailId;
    if(this.props.location.search !=''){
      var x=((this.props.location.search).replace("?","")).split("&");
       account = x[0];
       passcode = x[1];
       mailId = x[2];
      account=account.split("=")[1];
      passcode=passcode.split("=")[1];
      mailId=mailId.split("=")[1];
      this.setState({account:account,passcode:passcode,mailId:mailId});
    }
  }
  autoFill(){
    var x=((this.props.location.search).replace("?","")).split("&");
     account = x[0];
     passcode = x[1];
     mailId = x[2];
    account=account.split("=")[1];
    console.log(account);
    passcode=passcode.split("=")[1];
    console.log(passcode);
    mailId=mailId.split("=")[1];
    console.log(mailId);
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
            <Grid.Column width={16} style={{marginTop:'-15px'}}>
              <RegisterHeader />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='computer'>
            <Grid.Column width={16}>
              <DividerLine />
            </Grid.Column>
          </Grid.Row>
          {this.props.location.search == '' ?
          <Grid.Row only='computer' style={{marginTop:'-25px'}}>
            <Grid.Column width={16}>
              <RegisterFields />
            </Grid.Column>
          </Grid.Row>
          :
          <Grid.Row only='computer' style={{marginTop:'-25px'}}>
            <Grid.Column width={16}>
              <RegisterFields  account={this.state.account} passcode={this.state.passcode} mailId={this.state.mailId} />
            </Grid.Column>
          </Grid.Row>
        }
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
          <Grid.Row only='tablet'>
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
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
