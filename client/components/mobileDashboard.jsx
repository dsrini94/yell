import React, { Component} from 'react';

import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid } from 'semantic-ui-react'

import MenuBarDirectMobile from './menuBarDirectMobile.jsx';
import InfoBox from './infoBoxMobile.jsx';


export default class MobileDashboard extends Component
{
  constructor()
  {
    super();
    this.state={
      visible:false
    }
  }

  handleSideBar(){
    this.setState({visible:!this.state.visible})
  }

  render()
  {
    return(
      <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={this.state.visible} icon='labeled' vertical inverted>
            <Menu.Item name='home' >
              <Icon name='dashboard' />
              DashBoard
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='line chart' />
              Your Analytics
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='newspaper' />
              Accounts and Billings
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='user outline' />
              Business Profile
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <div>
            <Menu inverted style={styles.container}>
              <Menu.Item onClick={this.handleSideBar.bind(this)}>
                <Icon name="bars" />
              </Menu.Item>

              <Menu.Menu position='left'>
                <Menu.Item >
                  <span style={styles.titleText}>Search</span>
                </Menu.Item>

                <Menu.Item >
                  <span >Advertise</span>
                  <Icon name="phone" />
                  <span >0800 777 449</span>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </div>

          <div>
            <MenuBarDirectMobile />
          </div>

          <div>
            <Grid padded>
              <Grid.Row columns={3}>
                <Grid.Column>
                    <InfoBox number={'05'} text={'eContracts Awaiting Sign Off'} color={'#1cbfb1'} tagLine={''}/>
                </Grid.Column>

                <Grid.Column>
                    <InfoBox number={'05'} text={'Pending Payments'} color={'#f49e42'} tagLine={''}/>
                </Grid.Column>

                <Grid.Column>
                  <InfoBox number={'50'} text={'New Calls'} color={'#81c485'} tagLine={'(in past one month)'}/>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={{marginTop:-10}}>
                <Grid.Column width={16}>
                  <Segment inverted color={'yellow'}>
                    <center><span style={styles.text}>Your Adverts and Performance</span></center>
                  </Segment>
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </div>

          </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
  }
}

const styles={
  compName:{
    color:'yellow',
    fontWeight:'bold'
  },
  titleText:{
    color:'yellow'
  },
  container:{
    margin:0,
    borderRadius:0
  },
  text:{
    color:'black'
  }
}
