import React from 'react';
import {Grid,Input,Icon,Image} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

const registerHeader = (props) => (
    <Grid>
      <Grid.Row>
        <Grid.Column width={2}/>
        <Grid.Column width={2}>
          <Image size='large' src='./client/assets/images/businessLogo.png' as={Link} to="/" />
        </Grid.Column>
        <Grid.Column width={9}/>
        <Grid.Column as={Link} to='/login' width={2} style={{marginTop:'1.5%',textAlign:'right',color:'black'}}>
          <Icon name="user circle" size="big"/>
          <span style={{fontSize:'15px'}}><strong>Log In</strong></span>
        </Grid.Column>
        <Grid.Column width={2}/>
      </Grid.Row>
    </Grid>
);

export default registerHeader;
