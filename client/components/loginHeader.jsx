import React from 'react';
import {Grid,Input,Icon,Image} from 'semantic-ui-react';

const LoginHeader = (props) => (
  <div>
    <Grid>
      <Grid.Row>
        <Grid.Column width={1}/>
        <Grid.Column width={4}>
          <Image size='tiny' src='https://www.yell.com/img/yell_icon_256x256.png' />
        </Grid.Column>
        <Grid.Column width={5}>
          <Input icon='search' iconPosition='left' placeholder='Search...' />
        </Grid.Column>
        <Grid.Column width={4}>
          <h4>Create Account</h4>
        </Grid.Column>
        <Grid.Column width={1}/>
      </Grid.Row>
    </Grid>
  </div>
);

export default LoginHeader;
