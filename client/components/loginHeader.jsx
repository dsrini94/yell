import React from 'react';
import {Grid,Input,Icon,Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoginHeader = (props) => (
    <Grid>
      <Grid.Row>
        <Grid.Column width={2}/>
        <Grid.Column width={2} style={{marginTop:'-1%'}}>
          <Image size='large' src='./client/assets/images/businessLogo.png' as={Link} to="/" />
        </Grid.Column>
        <Grid.Column as={Link} to='/register' style={{marginTop:'1%',textAlign:'right',color:'black'}} width={11}>
          <span style={{fontSize:'15px'}}><strong>Create Account</strong></span>
        </Grid.Column>
        <Grid.Column width={2}/>
      </Grid.Row>
    </Grid>
);

export default LoginHeader;
