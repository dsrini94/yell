import React, {Component} from 'react';
import {Grid,Input,Checkbox,Button,Divider,Icon,Image,Message,Radio,Form} from 'semantic-ui-react';
import { Link, BrowserRouter } from 'react-router-dom';


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
      letterFound:false
    }
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
    this.showPassword = this.showPassword.bind(this);
  }

  componentWillReceiveProps(){
    console.log("props desktop---------->",this.props.account,this.props.passcode,this.props.mailId);
    this.setState({checked:true});
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
      //var characterFormat = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      var letterFormat =/[A-Za-z]/g;
      var numberFormat = /[0-9]/;
      //var upperFormat = /[A-Z]/;
      var noSpaceFormat = /^\S*$/;
      if(this.state.password.length >= 8){
        this.setState({lengthFound:true});
      }
      else{
        this.setState({lengthFound:false});
      }
      // if(characterFormat.test(this.state.password) == true) {
      //   this.setState({characterFound:true});
      // }
      // else{
      //   this.setState({characterFound:false});
      // }
      if(numberFormat.test(this.state.password) == true ){
        this.setState({numberFound:true});
      }
      else{
        this.setState({numberFound:false});
      }
      // if(upperFormat.test(this.state.password) == true ){
      //   this.setState({upperFound:true});
      // }
      // else{
      //   this.setState({upperFound:false});
      // }
      if(noSpaceFormat.test(this.state.password) == true ){
        this.setState({noSpaceFound:true});
      }
      else{
        this.setState({noSpaceFound:false});
      }
      if(letterFormat.test(this.state.password) == true ){
        this.setState({letterFound:true});
      }
      else{
        this.setState({letterFound:false});
      }
    })
    // var format = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  }

  render() {
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
                          <Checkbox label='I want to access YellDirect.com and have an account number' checked={this.state.checked} onChange={this.handleCheckbox} style={{fontSize:'12px'}}/>
                      </Form.Field>
                      {this.state.checked == true ?
                       <span style={{width:'105%'}}>
                       <Form.Field>
                           <label style={{float:'left'}}>Account Number</label>
                       </Form.Field>
                       {this.props.account !=" " ?
                       <Form.Field>
                         <Input fluid value={this.props.account}/>
                       </Form.Field>
                     :
                     <Form.Field>
                       <Input fluid/>
                     </Form.Field>}
                       <Form.Field >
                           <label style={{float:'left'}}>Postcode</label>
                       </Form.Field>
                       {this.props.passcode !=" " ?
                       <Form.Field>
                         <Input fluid value={this.props.passcode}/>
                       </Form.Field>
                     :
                     <Form.Field>
                       <Input fluid/>
                     </Form.Field>}
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
                      <Form.Field>
                          <label style={{float:'left'}}>Email Address</label>
                      </Form.Field>
                      {this.props.mailId !=" " ?
                      <Form.Field>
                        <Input fluid value={this.props.mailId}/>
                      </Form.Field>
                    :
                    <Form.Field>
                      <Input fluid placeholder='xyz@gmail.com'/>
                    </Form.Field>}
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

                            {this.state.letterFound == false ?
                               <span style={{fontSize:'12px',color:'gray'}}>One Letter</span>:
                               <span>
                                 <Icon name='checkmark box' color='green' />
                               <span style={{fontSize:'12px',color:'green'}}>One Letter</span>
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

                            {this.state.noSpaceFound == false ?
                            <span style={{fontSize:'12px',color:'gray'}}>No Space</span>:
                            <span>
                              <Icon name='checkmark box' color='green' />
                            <span style={{fontSize:'12px',color:'green'}}>No Space</span>
                           </span>
                            }

                          </Grid.Column>
                          <Grid.Column>

                            {this.state.lengthFound == false ?
                             <span style={{fontSize:'12px',color:'gray'}}>Password length 6 - 20</span>:
                             <span>
                               <Icon name='checkmark box' color='green' />
                             <span style={{fontSize:'12px',color:'green'}}>Password length 6 - 20</span>
                            </span>
                            }

                          </Grid.Column>
                        </Grid.Row>
                      </Grid>

                      <Form.Field>
                          <Checkbox label='Keep me up-dated by email on how Yell can help you find products and services (Privacy Policy) Optional' style={{marginTop:'12px',fontSize:'12px'}}/>
                      </Form.Field>
                      <Form.Field>
                          <Link to={`/success/${this.state.checked}`}>
                            <Button fluid style={{background:'#fedb00'}} >Create Account</Button>
                          </Link>
                      </Form.Field>
                    </Form>
                  </Grid.Column>
                  <Grid.Column width={6} style={{marginTop:'13%'}}>
                    {this.state.checked == true ?
                      <span>
                          <Message style={{fontSize:'11px'}}>
                            <Message.Header>
                              How to find your account number?
                            </Message.Header>
                            <p>
                              In emails or posts we have sent you.
                            </p>
                            <Message.Header>
                            Can't find your account number?
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
