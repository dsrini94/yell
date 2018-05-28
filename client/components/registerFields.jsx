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
            <Grid.Column width={3} />
            <Grid.Column width ={10}>
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
                  <Grid.Column width={16} style={{marginTop:'-2%'}}>
                    <Input fluid/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h3>Last Name</h3>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16} style={{marginTop:'-2%'}}>
                    <Input fluid/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column style={{marginTop:'-2%'}}>
                    <Message >
                        <p>
                          <strong>Note:</strong> &nbsp; We will automatically create your display name, e.g JSmith-39. You can change this on the My Settings page after your account is created.
                        </p>
                      </Message>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h3>Email Address</h3>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16} style={{marginTop:'-2%'}}>
                    <Input fluid/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16} style={{marginTop:'-2%'}}>
                    <h4 style={{color:'gray'}}>abc@xyz.com</h4>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h3>Password</h3>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16} style={{marginTop:'-2%'}}>
                    <Input fluid onChange={this.handlePassword}/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={4} style={{marginTop:'-2%'}}>

                    {this.state.upperFound == false ?
                    <span style={{color:'red'}}>One Uppercase</span>:
                  <span>
                    <span style={{color:'green'}}>One Uppercase</span>
                    <Icon name='checkmark box' color='green' />
                  </span>
                   }

                </Grid.Column>
                <Grid.Column width={4} style={{marginTop:'-2%'}}>

                  {this.state.numberFound == false ?
                    <span style={{color:'red'}} >One Number</span>:
                    <span>
                    <span style={{color:'green'}}>One Number</span>
                  <Icon name='checkmark box' color='green' />
                  </span>
                  }

                  </Grid.Column>
                  <Grid.Column width={4} style={{marginTop:'-2%'}}>

                    {this.state.characterFound == false ?
                    <span style={{color:'red'}}>One special Character</span>:
                    <span>
                    <span style={{color:'green'}}>One special Character</span>
                    <Icon name='checkmark box' color='green' />
                   </span>
                    }

                 </Grid.Column>
                 <Grid.Column width={4} style={{marginTop:'-2%'}}>
                   {this.state.lengthFound == false ?
                    <span style={{color:'red'}}>Minimum 8 characters</span>:
                    <span>
                    <span style={{color:'green'}}>Minimum 8 characters</span>
                   <Icon name='checkmark box' color='green' />
                   </span>
                   }

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
                  <Grid.Row style={{marginTop:'2%'}}>
                    <Grid.Column width={16}>
                      <Input fluid/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'3%'}}>
                    <Grid.Column width={16}>
                      <h3>Postcode</h3>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'2%'}}>
                    <Grid.Column width={16}>
                      <Input fluid/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'2%'}}>
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
            <Grid.Column width={3} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
