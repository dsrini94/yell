import React from 'react';
import {Grid,Divider} from 'semantic-ui-react';

const DividerBottom = (props) => (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Divider />
        </Grid.Column>
      </Grid.Row>
    </Grid>
);

export default DividerBottom;
