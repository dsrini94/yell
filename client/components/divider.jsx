import React from 'react';
import {Grid,Divider} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const DividerLine = (props) => (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Divider style={{background:'#fedb00',height:'20%',marginTop:'-1%'}}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);

export default DividerLine;
