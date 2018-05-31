import React, {Component} from 'react';
import {Grid,Input,Checkbox,Button,Icon,Image,Divider,Form} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class LoginFieldsTablet extends Component {
  constructor(){
    super();
    this.state={
      password:'',
      passwordType:'password'
    }
    this.handlePassword = this.handlePassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
    this.showPassword = this.showPassword.bind(this);
  }
  hidePassword(){
    this.setState({passwordType:'password'});
  }
  showPassword(){
    this.setState({passwordType:'text'});
  }
  handlePassword(event){
    let val = event.target.value;
    this.setState({password:val});
  }
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3} />
            <Grid.Column width ={10}>
              <Form>
                <Form.Field>
                    <h3 style={{textAlign:'center'}}>Login</h3>
                </Form.Field>
                <Form.Field>
                    <label style={{float:'left'}}>Email Address</label>
                </Form.Field>
                <Form.Field>
                    <Input fluid placeholder='abc@xyz.com'/>
                </Form.Field>
                <Form.Field>
                    <label style={{float:'left'}}>Password</label>
                    {
                      this.state.passwordType == 'password' ?
                      <label style={{float:'right',textDecoration:'underline'}} onClick={this.showPassword}>Show</label>
                      :
                      <label style={{float:'right',textDecoration:'underline'}} onClick={this.hidePassword}>Hide</label>
                    }
                </Form.Field>
                <Form.Field>
                    <Input type ={this.state.passwordType} value={this.state.password} fluid onChange={this.handlePassword}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Keep me logged in' />
                    <label style={{textAlign:'right',textDecoration: 'underline',float:'right'}}>Forgot Password?</label>
                </Form.Field>
                <Form.Field>
                    <p style={{fontSize:'11px'}}>By logging in you agree to Yell's Conditions of Use and <span style={{textDecoration:'underline',color:'blue'}}>Privacy Policy</span></p>
                </Form.Field>
                <Form.Field as={Link} to='/dashboard'>
                    <Button fluid style={{background:'#fedb00'}}>Login</Button>
                </Form.Field>
              </Form>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Divider horizontal>Or</Divider>
                    </Grid.Column>
                 </Grid.Row>
                 <Grid.Row style={{marginTop:'-25px'}}>
                   <Grid.Column width={8}>
                     <Button fluid color='red'>
                       <Icon name='google'  /> Google
                     </Button>
                   </Grid.Column>
                   <Grid.Column width={8}>
                     <Button fluid color='facebook'>
                       <Icon name='facebook' /> Facebook
                     </Button>
                   </Grid.Column>
                </Grid.Row>
                </Grid>
            </Grid.Column>
            <Grid.Column width={3} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
