import React,{Component} from 'react';

import { Grid } from 'semantic-ui-react'

//importing computer screen components
import AppBar from './../components/appBar.jsx';
import MenuBar from './../components/menuBar.jsx';
import HeroUnit from './../components/heroUnit.jsx';
import BottomSegment from './../components/bottomSegment.jsx';

//importing tablet screen Components
import AppBarTablet from './../components/appBarTablet.jsx';
import MenuBarTablet from './../components/menuBarTablet.jsx';
import HeroUnitTablet from './../components/heroUnitTablet.jsx';
import BottomSegmentTablet from './../components/bottomSegmentTablet.jsx';

//importing Mobile Components
import AppBarMobile from './../components/appBarMobile.jsx';
import MenuBarMobile from './../components/menuBarMobile.jsx';
import HeroUnitMobile from './../components/heroUnitMobile.jsx';
import BottomSegmentMobile from './../components/bottomSegmentMobile.jsx';


export default class HomePage extends Component
{
  render()
  {
    return(
      <Grid>
        <Grid.Row only='computer'>
          <Grid.Column>
            <AppBar />
            <MenuBar />
            <HeroUnit />
            <BottomSegment />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row only='tablet'>
          <Grid.Column>
            <AppBarTablet />
            <MenuBarTablet />
            <HeroUnitTablet />
            <BottomSegmentTablet />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row only='mobile'>
          <Grid.Column>
            <AppBarMobile />
            <MenuBarMobile />
            <HeroUnitMobile />
            <BottomSegmentMobile />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
