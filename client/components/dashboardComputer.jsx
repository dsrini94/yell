import React,{ Component } from 'react';

import { Grid, Menu, Segment, Icon } from 'semantic-ui-react'

import InfoBox from './infoBoxComputer.jsx'
import TableMenu from './tableComputer.jsx'


export default class DashBoardComputer extends React.Component
{
  constructor()
  {
    super();
    this.state={
      activeItem:'Your Analytics'
    }
  }

  handleItemClick(e, { name })
  {
    this.setState({ activeItem: name })
  }

  render()
  {
    const { activeItem } = this.state

    return(
      <Grid>

        <Grid.Row>
          <Grid.Column width={1} style={{marginLeft:20,marginTop:30}}>
                <Icon name="dashboard" size='big'/>
          </Grid.Column>

          <Grid.Column width={1} style={{marginLeft:-20,marginTop:35}}>
              <span style={styles.headingText}>Dashboard</span>
          </Grid.Column>

          <Grid.Column width={5} style={{marginTop:35}}>
              <center>
              <span style={styles.headingText}>Guildford Tyre Co. Ltd</span>
            </center>
          </Grid.Column>

        </Grid.Row>

        <Grid.Row >

          <Grid.Column width={3}>
            <Menu pointing secondary vertical>
              <Menu.Item name='Your Analytics' active={activeItem === 'Your Analytics'} onClick={this.handleItemClick.bind(this)} icon={'line chart'} />
              <Menu.Item name='Accounts and Billings' active={activeItem === 'Accounts and Billings'} onClick={this.handleItemClick.bind(this)} icon={'newspaper'}/>
              <Menu.Item name='Business Profile' active={activeItem === 'Business Profile'} onClick={this.handleItemClick.bind(this)} icon={'user outline'}/>
            </Menu>
          </Grid.Column>

          <Grid.Column width={13}>

            <Grid padded>
              <Grid.Row columns={3}>
                <Grid.Column>
                    <InfoBox number={'05'} text={'eContracts Awaiting Sign Off'} color={'#f49e42'} tagLine={''}/>
                </Grid.Column>

                <Grid.Column>
                    <InfoBox number={'03'} text={'Pending Payments'} color={'#81c4a5'} tagLine={''}/>
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
                <Grid.Column width={12}>
                  <TableMenu />
                </Grid.Column>

                <Grid.Column width={4}>
                </Grid.Column>

              </Grid.Row>

            </Grid>



          </Grid.Column>

        </Grid.Row>

      </Grid>
    );
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
