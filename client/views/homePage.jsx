import React,{Component} from 'react';

import { Grid } from 'semantic-ui-react'

import AppBar from './../components/appBar.jsx'

export default class HomePage extends Component
{
  render()
  {
    return(
      <Grid>
        <Grid.Row only='large screen'>
          <Grid.Column>
            <AppBar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
