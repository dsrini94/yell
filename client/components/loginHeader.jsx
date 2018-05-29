import React from 'react';
import {Grid,Input,Icon,Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoginHeader = (props) => (
    <Grid>
      <Grid.Row>
        <Grid.Column width={2}/>
        <Grid.Column width={1}>
          <Image size='tiny' src='https://www.yell.com/img/yell_icon_256x256.png' />
        </Grid.Column>
        <Grid.Column width={9}>
          <Input style={{marginTop:'2%'}} icon='search' iconPosition='left' placeholder='Search...' />
        </Grid.Column>
        <Grid.Column as={Link} to='/register' style={{marginTop:'2%',textAlign:'right',color:'black'}} width={2}>
          <span >Create Account</span>
        </Grid.Column>
        <Grid.Column width={2}/>
      </Grid.Row>
    </Grid>
);

export default LoginHeader;
