import React,{ Component } from 'react';

import { Grid, Menu, Segment, Icon, Header } from 'semantic-ui-react'

import InfoBox from './infoBoxComputer.jsx';
import TableMenu from './tableComputer.jsx';
import Charts from './chart.jsx';


import Graph1Data from './../data/graph1Data.js';

export default class DashBoardComputer extends React.Component
{
  constructor()
  {
    super();
    this.state={
      activeItem:'Dashboard'
    }
  }

  handleItemClick(e, { name })
  {
    this.setState({ activeItem: name })
  }

  render()
  {
    const { activeItem } = this.state


    if(this.state.activeItem == 'Dashboard')
    {

          return(
            <Grid>
              <Grid.Row>

                <Grid.Column width={2} />

                <Grid.Column width={5} style={{marginTop:35}}>
                    <center>
                    <span style={styles.headingText}>Guildford Tyre Co. Ltd</span>
                  </center>
                </Grid.Column>

              </Grid.Row>

              <Grid.Row >

                <Grid.Column width={3}>
                  <Menu pointing secondary vertical>
                    <Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick.bind(this)} icon={'dashboard'} />
                    <Menu.Item name='Your Analytics' active={activeItem === 'Your Analytics'} onClick={this.handleItemClick.bind(this)} icon={'line chart'} />
                    <Menu.Item name='Accounts and Billings' active={activeItem === 'Accounts and Billings'} onClick={this.handleItemClick.bind(this)} icon={'newspaper'}/>
                    <Menu.Item name='Business Profile' active={activeItem === 'Business Profile'} onClick={this.handleItemClick.bind(this)} icon={'user outline'}/>
                  </Menu>
                </Grid.Column>

                <Grid.Column width={13}>

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

                    <Grid.Row>
                      <Grid.Column width={16}>
                        <Segment inverted color={'yellow'}>
                          <center><span style={styles.text}>Your Adverts and Performance</span></center>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column width={16}>
                        <TableMenu />
                      </Grid.Column>

                    </Grid.Row>

                  </Grid>



                </Grid.Column>

              </Grid.Row>
            </Grid>
          );
    }
    else if (this.state.activeItem == 'Accounts and Billings') {
      return(
        <Grid>
          <Grid.Row>

            <Grid.Column width={2} />

            <Grid.Column width={5} style={{marginTop:35}}>
                <center>
                <span style={styles.headingText}>Guildford Tyre Co. Ltd</span>
              </center>
            </Grid.Column>

          </Grid.Row>

          <Grid.Row >

            <Grid.Column width={3}>
              <Menu pointing secondary vertical>
                <Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick.bind(this)} icon={'dashboard'} />
                <Menu.Item name='Your Analytics' active={activeItem === 'Your Analytics'} onClick={this.handleItemClick.bind(this)} icon={'line chart'} />
                <Menu.Item name='Accounts and Billings' active={activeItem === 'Accounts and Billings'} onClick={this.handleItemClick.bind(this)} icon={'newspaper'}/>
                <Menu.Item name='Business Profile' active={activeItem === 'Business Profile'} onClick={this.handleItemClick.bind(this)} icon={'user outline'}/>
              </Menu>
            </Grid.Column>

            <Grid.Column width={13}>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      );

    }
    else {
      return(
        <Grid padded>
          <Grid.Row>

            <Grid.Column width={2} />

            <Grid.Column width={5} style={{marginTop:35}}>
                <center>
                <span style={styles.headingText}>Guildford Tyre Co. Ltd</span>
              </center>
            </Grid.Column>

          </Grid.Row>

          <Grid.Row >

            <Grid.Column width={3}>
              <Menu pointing secondary vertical>
                <Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick.bind(this)} icon={'dashboard'} />
                <Menu.Item name='Your Analytics' active={activeItem === 'Your Analytics'} onClick={this.handleItemClick.bind(this)} icon={'line chart'} />
                <Menu.Item name='Accounts and Billings' active={activeItem === 'Accounts and Billings'} onClick={this.handleItemClick.bind(this)} icon={'newspaper'}/>
                <Menu.Item name='Business Profile' active={activeItem === 'Business Profile'} onClick={this.handleItemClick.bind(this)} icon={'user outline'}/>
              </Menu>
            </Grid.Column>

            <Grid.Column width={13}>
              <Segment inverted color="grey"><center><Header inverted>No Posts Yet.</Header></center></Segment>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      )
    }

  }
}

const styles={
  segment:{
    flex:1
  },
  text:{
    fontWeight:'bold',
    color:'black',
    fontSize:18
  },
  container:{
    margin:0,
    borderRadius:0
  },
  headingText:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:'20px'
  },
}
