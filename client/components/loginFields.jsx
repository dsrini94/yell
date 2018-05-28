import React, {Component} from 'react';
import {Grid,Input,Checkbox,Button,Icon,Image,Divider} from 'semantic-ui-react';

export default class LoginFields extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5} />
            <Grid.Column width ={6}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h1 style={{textAlign:'center'}}>Login</h1>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h3>Email Address</h3>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16} style={{marginTop:'-3%'}}>
                    <Input fluid/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16} style={{marginTop:'-4%'}}>
                    <h4 style={{color:'gray'}}>abc@xyz.com</h4>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <h3>Password</h3>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <h5 style={{textAlign:'right',textDecoration: 'underline'}}>Show</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16} style={{marginTop:'-3%'}}>
                    <Input type='password' fluid/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <Checkbox label='Keep me logged in' />
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <h5 style={{textAlign:'right',textDecoration: 'underline'}}>Forgot Password?</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h5>By logging in you agree to Yell's Conditions of Use and <span style={{textDecoration:'underline',color:'blue'}}>Privacy Policy</span></h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Button fluid style={{background:'#fedb00'}}>Login</Button>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Divider horizontal>Or</Divider>
                 </Grid.Column>
                </Grid.Row>
                <Grid.Row>
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
            <Grid.Column width={5} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
