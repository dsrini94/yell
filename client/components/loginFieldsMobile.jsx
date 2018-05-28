import React, {Component} from 'react';
import {Grid,Input,Checkbox,Button,Icon,Image,Divider} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class LoginFieldsMobile extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  render() {
    return (
      <div style={{overflow:'hidden'}}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={2} />

            <Grid.Column width ={12}>
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
                  <Grid.Column width={16}>
                    <Input fluid/>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={16}>
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
                  <Grid.Column width={16}>
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
                  <Grid.Column as={Link} to='/register' width={16}>
                    <Button basic fluid color='yellow'>Create Account</Button>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={16}>
                    <Divider horizontal>Or</Divider>
                 </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={16}>
                    <Button fluid color='red'>
                      <Icon name='google'  /> Google
                    </Button>
                 </Grid.Column>
               </Grid.Row>

               <Grid.Row>
                 <Grid.Column width={16}>
                   <Button fluid color='facebook'>
                     <Icon name='facebook' /> Facebook
                   </Button>
                </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
