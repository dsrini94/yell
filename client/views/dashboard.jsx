import React,{ Component } from 'react';

import { Menu,Grid } from 'semantic-ui-react'

import DashBoardComputer from './../components/dashboardComputer.jsx'
import AppBarDirect from './../components/appBarDirect.jsx'
import MenuBarDirect from './../components/menuBarDirect.jsx';


export default class DashBoard extends React.Component
{
  render()
  {
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column only='computer'>
            <AppBarDirect/>
            <MenuBarDirect/>
            <DashBoardComputer/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
