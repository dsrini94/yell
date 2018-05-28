import React, {Component} from 'react';
import {Grid,Input,Checkbox,Button,Divider,Icon,Image,Message,Radio} from 'semantic-ui-react';

export default class RegisterFields extends Component {
  constructor(){
    super();
    this.state={
      checked:false,
      password:'',
      characterFound:false,
      numberFound:false,
      upperFound:false,
      lengthFound:false
    }
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleCheckbox(){
    this.setState({checked:!this.state.checked},()=>{
      console.log(this.state.checked);
    })
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
      if(characterFormat.test(this.state.password) == true) {
        this.setState({characterFound:true});
      }
      if(numberFormat.test(this.state.password) == true ){
        this.setState({numberFound:true});
      }
      if(upperFormat.test(this.state.password) == true ){
        this.setState({upperFound:true});
      }
    })
    // var format = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
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
            <Grid.Column width={2} />
            <Grid.Column width ={6}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h1 style={{textAlign:'center'}}>Create Account</h1>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <h3>First Name</h3>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Message >
                        <p>
                          <strong>Note:</strong> &nbsp; We will automatically create your display name, e.g JSmith-39. You can change this on the My Settings page after your account is created.
                        </p>
                      </Message>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{marginTop:'-25%'}}>
                  <Grid.Column width={10}>
                    <Input fluid/>
                  </Grid.Column>
                    <Grid.Column width={6} />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <h3>Last Name</h3>
                  </Grid.Column>
                  <Grid.Column width={6} />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <Input fluid/>
                  </Grid.Column>
                  <Grid.Column width={6} />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <h3>Email Address</h3>
                  </Grid.Column>
                  <Grid.Column width={6} />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <Input fluid/>
                  </Grid.Column>
                  <Grid.Column width={6} />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <h4 style={{color:'gray'}}>abc@xyz.com</h4>
                  </Grid.Column>
                  <Grid.Column width={6} />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <h3>Password</h3>
                  </Grid.Column>
                  <Grid.Column width={6} />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <Input fluid onChange={this.handlePassword}/>
                  </Grid.Column>
                  <Grid.Column width={6} />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                    {this.state.upperFound == false ?
                    <Icon name='circle thin' /> :
                    <Icon name='circle' color='green' />
                   }
                    <span>One Uppercase</span>
                </Grid.Column>
                <Grid.Column width={8}>
                  {this.state.numberFound == false ?
                  <Icon name='circle thin' />:
                  <Icon name='circle' color='green' />
                  }
                  <span>One Number</span>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                    {this.state.characterFound == false ?
                    <Icon name='circle thin' />:
                    <Icon name='circle' color='green' />
                    }
                    <span>One special Character</span>
                 </Grid.Column>
                 <Grid.Column width={8}>
                   {this.state.lengthFound == false ?
                   <Icon name='circle thin' />:
                   <Icon name='circle' color='green' />
                   }
                   <span>Minimum 8 characters</span>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <Checkbox label='I want to access Yell Direct' checked={this.state.checked} onChange={this.handleCheckbox}/>
                  </Grid.Column>
                  <Grid.Column width={6} />
                </Grid.Row>
                {this.state.checked == true ?
                  <span style={{width:'105%'}}>
                  <Grid.Row>
                    <Grid.Column width={10}>
                      <h3>Account Number</h3>
                    </Grid.Column>
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
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'5%'}}>
                    <Grid.Column width={10}>
                      <Input fluid/>
                    </Grid.Column>
                    <Grid.Column width={6} />
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'5%'}}>
                    <Grid.Column width={10}>
                      <h3>Postcode</h3>
                    </Grid.Column>
                    <Grid.Column width={6} />
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'5%'}}>
                    <Grid.Column width={10}>
                      <Input fluid/>
                    </Grid.Column>
                    <Grid.Column width={6} />
                  </Grid.Row>
                  </span>
               : ''}
                <Grid.Row>
                  <Grid.Column width={10}>
                    <Checkbox label='Keep me up-dated by email on how Yell can help you find products and services (Privacy Policy) Optional'/>
                  </Grid.Column>
                  <Grid.Column width={6} />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <Button fluid style={{background:'#fedb00'}}>Create Account</Button>
                  </Grid.Column>
                  <Grid.Column width={6} />
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={4} />
              {/* <Grid.Row style={{marginTop:'34%'}}>
                <Grid.Column>
                  <Message >
                      <p>
                        <strong>Note:</strong> &nbsp; We will automatically create your display name, e.g JSmith-39. You can change this on the My Settings page after your account is created.
                      </p>
                    </Message>
                </Grid.Column>
              </Grid.Row>
              {this.state.checked == true ? <Grid.Row style={{marginTop:'165%'}}>
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

            </Grid.Column>*/}
            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
