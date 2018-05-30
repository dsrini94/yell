import React from 'react';
import {Grid,Input,Icon,Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const registerHeaderMobile = (props) => (
    <Grid style={{overflow:'hidden'}}>
      <Grid.Row>
        <Grid.Column width={1}/>
        <Grid.Column width={3}>
          <Image size='tiny' src='https://www.yell.com/img/yell_icon_256x256.png' />
        </Grid.Column>
        <Grid.Column as={Link} to='/login' width={11} style={{marginTop:'3%',textAlign:'right',color:'black'}}>
          <Icon name="user circle" size="big"/>
          <span>Log In</span>
        </Grid.Column>
        <Grid.Column width={1}/>
      </Grid.Row>
    </Grid>
);

export default registerHeaderMobile;
