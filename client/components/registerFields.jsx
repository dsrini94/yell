import React, {Component} from 'react';
import {Grid,Input,Checkbox,Button,Divider,Icon,Image,Message,Radio} from 'semantic-ui-react';
import YellDirectFields from '../components/yellDirectFields.jsx';

export default class RegisterFields extends Component {
  constructor(){
    super();
    this.state={
      checked:false
    }
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }
  handleCheckbox(){
    this.setState({checked:!this.state.checked},()=>{
      console.log(this.state.checked);
    })
  }
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <Divider style={{background:'#fedb00',height:'20%',marginTop:'-1%'}}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3} />
            <Grid.Column width ={6}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h1 style={{textAlign:'center'}}>Create Account</h1>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h3>First Name</h3>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Input fluid/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h3>Last Name</h3>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Input fluid/>
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
                    <h3 style={{color:'gray'}}>abc@xyz.com</h3>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h3>Password</h3>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Input type='password' fluid/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                   <Radio label='One Uppercase' />
                </Grid.Column>
                <Grid.Column width={8}>
                   <Radio label='One Number' />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                   <Radio label='One special Character' />
                 </Grid.Column>
                 <Grid.Column width={8}>
                   <Radio label='Minimum 8 characters' />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Checkbox label='I want to access Yell Direct' checked={this.state.checked} onChange={this.handleCheckbox}/>
                  </Grid.Column>
                </Grid.Row>
                {this.state.checked == true ?
                  <span style={{width:'105%'}}>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <h3>Account Number</h3>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'5%'}}>
                    <Grid.Column width={16}>
                      <Input fluid/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'5%'}}>
                    <Grid.Column width={16}>
                      <h3>Postcode</h3>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'5%'}}>
                    <Grid.Column width={16}>
                      <Input fluid/>
                    </Grid.Column>
                  </Grid.Row>
                  </span>
               : ''}
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Checkbox label='Keep me up-dated by email on how Yell can help you find products and services (Privacy Policy) Optional'/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Button fluid style={{background:'#fedb00'}}>Create Account</Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={4}  >
              <Grid.Row style={{marginTop:'34%'}}>
                <Grid.Column>
                  <Message >
                      <p>
                        <strong>Note:</strong> &nbsp; We will automatically create your display name, e.g JSmith-39. You can change this on the My Settings page after your account is created.
                      </p>
                    </Message>
                </Grid.Column>
              </Grid.Row>
              {this.state.checked == true ? <Grid.Row style={{marginTop:'150%'}}>
                <Grid.Column>
                  <Message>
                    <Message.Header>
                      How to find your account number? :
                    </Message.Header>
                    <p>
                      In emails or posts we have sent you.
                    </p>
                    <Message.Header>
                    Can't find your account number?:
                    </Message.Header>
                    <p>
                      Contact us <span style={{color:'blue'}}> online </span> or <span style={{color:'blue'}}> email us. </span>
                    </p>
                  </Message>
                </Grid.Column>
              </Grid.Row>:
              ''
            }

            </Grid.Column>
            <Grid.Column width={3} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
