import React from 'react';
import {Grid,Input,Icon,Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const registerHeaderMobile = (props) => (
    <Grid style={{overflow:'hidden'}}>
      <Grid.Row>
        <Grid.Column width={1}/>
        <Grid.Column width={4}>
          <Image size='medium' src='./client/assets/images/businessLogo.png' as={Link} to="/"  style={{marginTop:5}}/>
        </Grid.Column>
        <Grid.Column as={Link} to='/login' width={9} style={{marginTop:'3%',textAlign:'right',color:'black'}}>
          <Icon name="user circle" size="big"/>
          <span style={{fontSize:'15px'}}><strong>Log In</strong></span>
        </Grid.Column>
        <Grid.Column width={1}/>
      </Grid.Row>
    </Grid>
);

export default registerHeaderMobile;
