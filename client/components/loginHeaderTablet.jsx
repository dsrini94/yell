import React from 'react';
import {Grid,Input,Icon,Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoginHeaderTablet = (props) => (
    <Grid style={{overflow:'hidden'}}>
      <Grid.Row>
        <Grid.Column width={2}/>
        <Grid.Column width={2}>
          <Image size='tiny' src='https://www.yell.com/img/yell_icon_256x256.png' />
        </Grid.Column>
        <Grid.Column width={7}>
          <Input style={{marginTop:'4%'}} icon='search' iconPosition='left' placeholder='Search...' />
        </Grid.Column>
        <Grid.Column as={Link} to='/register' style={{marginTop:'2%',textAlign:'right',color:'black'}} width={3}>
          <span >Create Account</span>
        </Grid.Column>
        <Grid.Column width={2}/>
      </Grid.Row>
    </Grid>
);

export default LoginHeaderTablet;
