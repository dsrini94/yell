import React from 'react';
import {Grid,Input,Icon,Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoginHeaderMobile = (props) => (
    <Grid style={{overflow:'hidden'}}>
      <Grid.Row>
        <Grid.Column width={1}/>

        <Grid.Column width={4} style={{marginTop:'-3%'}}>
          <Image size='medium' src='./client/assets/images/businessLogo.png' as={Link} to="/" />
        </Grid.Column>

        <Grid.Column as={Link} to='/register' style={{textAlign:'right',color:'black'}} width={10}>
          <span style={{fontSize:'15px'}}><strong>Create Account</strong></span>
        </Grid.Column>

        <Grid.Column width={1}/>
      </Grid.Row>
    </Grid>
);

export default LoginHeaderMobile;
