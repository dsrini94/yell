import React from 'react';
import {Grid,Input,Icon,Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoginHeaderMobile = (props) => (
    <Grid style={{overflow:'hidden'}}>
      <Grid.Row>
        <Grid.Column width={1}/>

        <Grid.Column width={4}>
          <Image size='tiny' src='./client/assets/images/logo.png' />
        </Grid.Column>

        <Grid.Column as={Link} to='/register' style={{textAlign:'right',color:'black'}} width={10}>
          <span >Create Account</span>
        </Grid.Column>

        <Grid.Column width={1}/>
      </Grid.Row>
    </Grid>
);

export default LoginHeaderMobile;
