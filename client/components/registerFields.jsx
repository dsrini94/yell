import React, {Component} from 'react';
import {Grid,Input,Checkbox,Button,Divider,Icon,Image,Message,Radio,Form} from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import Success from './accountCreatedPage.jsx';

export default class RegisterFields extends Component {
  constructor(){
    super();
    this.state={
      checked:false,
      password:'',
      passwordType:'text',
      characterFound:false,
      numberFound:false,
      upperFound:false,
      lengthFound:false,
      accountnumber:1122334567,
      postcode:5689,
      message:'',
      redirect:false
    }
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
    this.showPassword = this.showPassword.bind(this);
  }
  handleCheckbox(){
    this.setState({checked:!this.state.checked});
  }
  hidePassword(){
    this.setState({passwordType:'password'});
  }
  showPassword(){
    this.setState({passwordType:'text'});
  }
  handlePassword(event){
    let val = event.target.value;
    this.setState({password:val},()=>{
      var characterFormat = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      var numberFormat = /[0-9]/;
      var upperFormat = /[A-Z]/;
      if(this.state.password.length >= 8){
        this.setState({lengthFound:true});
      }
      else{
        this.setState({lengthFound:false});
      }
      if(characterFormat.test(this.state.password) == true) {
        this.setState({characterFound:true});
      }
      else{
        this.setState({characterFound:false});
      }
      if(numberFormat.test(this.state.password) == true ){
        this.setState({numberFound:true});
      }
      else{
        this.setState({numberFound:false});
      }
      if(upperFormat.test(this.state.password) == true ){
        this.setState({upperFound:true});
      }
      else{
        this.setState({upperFound:false});
      }
    })
    // var format = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  }
 createAccount(){

 }
  render() {
  //  console.log("message",this.state.message);
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4} />
            <Grid.Column width ={8}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <Form>
                      <Form.Field>
                          <h3 style={{textAlign:'center'}}>Create Account</h3>
                      </Form.Field>
                      <Form.Field>
                          <Checkbox label='I want to access Yell Direct' checked={this.state.checked} onChange={this.handleCheckbox} style={{fontSize:'12px'}}/>
                      </Form.Field>
                       {this.state.checked == true ?
                        <span style={{width:'105%'}}>
                        <Form.Field>
                            <label style={{float:'left'}}>Account Number</label>
                        </Form.Field>
                        <Form.Field >
                            <Input fluid/>
                        </Form.Field>
                        <Form.Field >
                            <label style={{float:'left'}}>Postcode</label>
                        </Form.Field>
                        <Form.Field >
                            <Input fluid/>
                        </Form.Field>
                        {/*<Form.Field>
                            <Message style={{fontSize:'11px'}}>
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
                        </Form.Field>*/}
                        </span>
                     : ''}
                      <Form.Field style={{marginTop:'2%'}}>
                          <label style={{float:'left'}} >First Name</label>
                      </Form.Field>
                      <Form.Field>
                          <Input fluid/>
                      </Form.Field>
                      <Form.Field>
                          <label style={{float:'left'}}>Last Name</label>
                      </Form.Field>
                      <Form.Field>
                          <Input fluid/>
                      </Form.Field>
                      {/* <Form.Field>
                          <Message >
                              <p style={{fontSize:'11px'}}>
                                <strong>Note:</strong> &nbsp; We will automatically create your display name, e.g JSmith-39. You can change this on the My Settings page after your account is created.
                              </p>
                            </Message>
                      </Form.Field> */}
                      <Form.Field>
                          <label style={{float:'left'}}>Email Address</label>
                      </Form.Field>
                      <Form.Field>
                          <Input fluid placeholder='abc@xyz.com'/>
                      </Form.Field>
                      <Form.Field>
                          <label style={{float:'left'}}>Password</label>
                          {
                            this.state.passwordType == 'text' ?
                            <label style={{float:'right',textDecoration:'underline'}} onClick={this.hidePassword}>Hide</label>
                            :
                            <label style={{float:'right',textDecoration:'underline'}} onClick={this.showPassword}>Show</label>
                          }
                      </Form.Field>
                      <Form.Field>
                          <Input type ={this.state.passwordType} value={this.state.password} fluid onChange={this.handlePassword}/>
                      </Form.Field>
                      <Grid>
                        <Grid.Row columns={2}>
                          <Grid.Column>

                            {this.state.upperFound == false ?
                               <span style={{fontSize:'12px',color:'gray'}}>One Uppercase</span>:
                               <span>
                                 <Icon name='checkmark box' color='green' />
                               <span style={{fontSize:'12px',color:'green'}}>One Uppercase</span>
                              </span>
                              }

                          </Grid.Column>
                          <Grid.Column>

                            {this.state.numberFound == false ?
                              <span style={{fontSize:'12px',color:'gray'}} >One Number</span>:
                              <span>
                                <Icon name='checkmark box' color='green' />
                              <span style={{fontSize:'12px',color:'green'}}>One Number</span>
                              </span>
                            }

                          </Grid.Column>

                          <Grid.Column>

                            {this.state.characterFound == false ?
                            <span style={{fontSize:'12px',color:'gray'}}>One special Character</span>:
                            <span>
                              <Icon name='checkmark box' color='green' />
                            <span style={{fontSize:'12px',color:'green'}}>One special Character</span>
                           </span>
                            }

                          </Grid.Column>
                          <Grid.Column>

                            {this.state.lengthFound == false ?
                             <span style={{fontSize:'12px',color:'gray'}}>Minimum 8 characters</span>:
                             <span>
                               <Icon name='checkmark box' color='green' />
                             <span style={{fontSize:'12px',color:'green'}}>Minimum 8 characters</span>
                            </span>
                            }

                          </Grid.Column>
                        </Grid.Row>
                      </Grid>

                      <Form.Field>
                          <Checkbox label='Keep me up-dated by email on how Yell can help you find products and services (Privacy Policy) Optional' style={{marginTop:'12px',fontSize:'12px'}}/>
                      </Form.Field>
                      <Form.Field>
                          <Button fluid style={{background:'#fedb00'}} onClick={this.createAccount.bind(this)}>Create Account</Button>
                      </Form.Field>
                    </Form>
                  </Grid.Column>
                  <Grid.Column width={6} style={{marginTop:'13%'}}>
                    {this.state.checked == true ?
                      <span>
                          <Message style={{fontSize:'11px'}}>
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
                          <Message style={{marginTop:'20%'}}>
                              <p style={{fontSize:'11px'}}>
                                <strong>Note:</strong> &nbsp; We will automatically create your display name, e.g JSmith-39. You can change this on the My Settings page after your account is created.
                              </p>
                            </Message>
                          </span>
                   : ''}
                   {this.state.checked == false ?
                       <Message>
                           <p style={{fontSize:'11px'}}>
                             <strong>Note:</strong> &nbsp; We will automatically create your display name, e.g JSmith-39. You can change this on the My Settings page after your account is created.
                           </p>
                         </Message>
                         : ''
                       }
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={4} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
