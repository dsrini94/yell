import React from 'react';
import {Grid,Input,Icon,Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoginHeader = (props) => (
    <Grid>
      <Grid.Row>
        <Grid.Column width={2}/>
        <Grid.Column width={1}>
          <Image size='small' src='./client/assets/images/logo.png' />
        </Grid.Column>
        <Grid.Column as={Link} to='/register' style={{textAlign:'right',color:'black'}} width={11}>
          <span >Create Account</span>
        </Grid.Column>
        <Grid.Column width={2}/>
      </Grid.Row>
    </Grid>
);

export default LoginHeader;
