import React,{ Component } from 'react';

import { Menu,Grid } from 'semantic-ui-react'

//importing Computer components
import DashBoardComputer from './../components/dashboardComputer.jsx'
import AppBarDirect from './../components/appBarDirect.jsx'
import MenuBarDirect from './../components/menuBarDirect.jsx';
import DashboardFooter from './../components/dashboardFooter.jsx';
import DividerBottom from './../components/dividerBottom.jsx';
//importing Moobile components
import MobileDashboard from './../components/mobileDashboard.jsx'



export default class DashBoard extends React.Component
{
  render()
  {
    return(
      <Grid>
        <Grid.Row only='computer'>
          <Grid.Column only='computer'>
            <AppBarDirect/>
            <MenuBarDirect/>
            <DashBoardComputer/>
            <DividerBottom />
            <DashboardFooter />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row only='mobile'>
          <Grid.Column only='mobile'>
            <MobileDashboard />
            {/* <DashboardFooter /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
