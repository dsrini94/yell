import React from 'react';
import {Grid,Input,Icon,Image} from 'semantic-ui-react';


const LoginHeaderMobile = (props) => (
    <Grid style={{overflow:'hidden'}}>
      <Grid.Row>
        <Grid.Column width={1}/>

        <Grid.Column width={3} style={{marginTop:'1%'}}>
          <Image size='tiny' src='https://www.yell.com/img/yell_icon_256x256.png' />
        </Grid.Column>

        <Grid.Column width={4}>
          <Input style={{marginTop:'6px'}} icon='search' iconPosition='left' placeholder='Search...' />
        </Grid.Column>

        <Grid.Column width={7}/>
      </Grid.Row>
    </Grid>
);

export default LoginHeaderMobile;
