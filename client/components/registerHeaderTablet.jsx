import React from 'react';
import {Grid,Input,Icon,Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const registerHeaderTablet = (props) => (
    <Grid>
      <Grid.Row>
        <Grid.Column width={2}/>
        <Grid.Column width={2} >
          <Image size='mini' src='https://www.yell.com/img/yell_icon_256x256.png' />
        </Grid.Column>
        <Grid.Column width={7}/>
        <Grid.Column as={Link} to='/login' width={3} style={{marginTop:'0.5%',textAlign:'right',color:'black'}}>
          <Icon name="user circle" size="big"/>
          <span style={{fontSize:'15px'}}><strong>Log In</strong></span>
        </Grid.Column>
        <Grid.Column width={2}/>
      </Grid.Row>
    </Grid>
);

export default registerHeaderTablet;
