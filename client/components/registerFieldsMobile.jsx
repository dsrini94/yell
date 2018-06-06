import React, {Component} from 'react';
import {Grid,Input,Checkbox,Button,Divider,Icon,Image,Message,Radio,Form} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class RegisterFieldsMobile extends Component {
  constructor(){
    super();
    this.state={
      checked:false,
      password:'',
      passwordType:'text',
      characterFound:false,
      numberFound:false,
      upperFound:false,
      lengthFound:false
    }
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
    this.showPassword = this.showPassword.bind(this);
  }
  handleCheckbox(){
    this.setState({checked:!this.state.checked},()=>{
      console.log(this.state.checked);
    })
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
  render() {
    return (
      <div style={{overflow:'hidden'}}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={2} />

            <Grid.Column width ={12}>
              <Form>
                <Form.Field>
                    <h3 style={{textAlign:'center'}}>Create Account</h3>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I want to access YellDirect.com and have an account number' checked={this.state.checked} onChange={this.handleCheckbox} style={{fontSize:'12px',marginTop:'10px'}}/>
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
                  <Form.Field>
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
                  </Form.Field>
                  </span>
               : ''}
                <Form.Field>
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
                    <Message >
                        <p style={{fontSize:'11px'}}>
                          <strong>Note:</strong> &nbsp; We will automatically create your display name, e.g JSmith-39. You can change this on the My Settings page after your account is created.
                        </p>
                      </Message>
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
                      this.state.passwordType == 'text' ?
                      <label style={{float:'right',textDecoration:'underline'}} onClick={this.hidePassword}>Hide</label>
                      :
                      <label style={{float:'right',textDecoration:'underline'}} onClick={this.showPassword}>Show</label>
                    }
                </Form.Field>
                <Form.Field>
                    <Input type ={this.state.passwordType} value={this.state.password} fluid onChange={this.handlePassword}/>
                </Form.Field>
                <Form.Group>
                  <Form.Field>
                   {this.state.upperFound == false ?
                      <span style={{fontSize:'12px',color:'gray'}}>One Letter</span>:
                      <span>
                        <Icon name='checkmark box' color='green' />
                      <span style={{fontSize:'12px',color:'green'}}>One Letter</span>
                     </span>
                     }
                  </Form.Field>
                  <Form.Field>
                      {this.state.characterFound == false ?
                      <span style={{fontSize:'12px',color:'gray'}}>One Number</span>:
                      <span>
                        <Icon name='checkmark box' color='green' />
                      <span style={{fontSize:'12px',color:'green'}}>One Number</span>
                     </span>
                      }
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field>
                    {this.state.numberFound == false ?
                      <span style={{fontSize:'12px',color:'gray'}} >No Space</span>:
                      <span>
                        <Icon name='checkmark box' color='green' />
                      <span style={{fontSize:'12px',color:'green'}}>No Space</span>
                      </span>
                    }
                </Form.Field>
                <Form.Field>
                   {this.state.lengthFound == false ?
                    <span style={{fontSize:'12px',color:'gray'}}>Password length 6 - 20</span>:
                    <span>
                      <Icon name='checkmark box' color='green' />
                    <span style={{fontSize:'12px',color:'green'}}>Password length 6 - 20</span>
                   </span>
                   }
                </Form.Field>
              </Form.Group>
                <Form.Field>
                    <Checkbox label='Keep me up-dated by email on how Yell can help you find products and services (Privacy Policy) Optional' style={{marginTop:'7px',fontSize:'12px'}}/>
                </Form.Field>
                <Form.Field>
                  <Link to={`/success/${this.state.checked}`}>
                    <Button fluid style={{background:'#fedb00'}}>Create Account</Button>
                  </Link>
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
