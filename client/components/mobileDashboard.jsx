import React, { Component} from 'react';

import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Checkbox ,Accordion} from 'semantic-ui-react'

import MenuBarDirectMobile from './menuBarDirectMobile.jsx';
import InfoBox from './infoBoxMobile.jsx';
import Charts from './chart.jsx';
import YellData from './../data/yellData.js';
import Graph1Data from './../data/graph1Data.js';
import Graph2Data from './../data/graph2Data.js';
import Graph3Data from './../data/graph3Data.js';
import Graph4Data from './../data/graph4Data.js';
import DashboardFooter from './../components/dashboardFooter.jsx';
import SwipeableViews from 'react-swipeable-views';

export default class MobileDashboard extends Component
{
  constructor()
  {
    super();
    this.state={
      visible:false,
      activeItem:'Yell.com (13)',
      index:0,
      activeIndexAccordion:99
    }
  }

  handleSideBar(){
    this.setState({visible:!this.state.visible})
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name,index:e })
}
handleClick(e){
  const newIndex = this.state.activeIndexAccordion === e ? -1 : e
  this.setState({ activeIndexAccordion: newIndex })
}

renderTableData()
{
  return(
    YellData.map((item,key)=>{
      var color =  item.status == 'live' ? 'green' : '#ed9147';
      return(
        <Grid.Row key={key}>
          <Grid.Column width={16}>
            <Accordion>
               <Accordion.Title active={this.state.activeIndexAccordion === key} index={key} onClick={this.handleClick.bind(this,key)}>
                 <Grid>
                   <Grid.Row style={{padding:0}}>
                     <Grid.Column width={2}>
                       <div style={{padding:3,backgroundColor:color,float:'left',height:40}}></div>
                       <Checkbox style={{padding:5,marginTop:'17%'}} />
                     </Grid.Column>
                     <Grid.Column width={5} style={{marginTop:'2%'}}>
                        {item.name}
                     </Grid.Column>
                     <Grid.Column width={4} style={{marginTop:'2%'}}>
                       {item.number}
                     </Grid.Column>
                     <Grid.Column width={3} style={{marginTop:'2%'}}>
                       <span style={{color:color,fontWeight:'bold',padding:20}}>{item.status}</span>
                     </Grid.Column>
                      <Grid.Column width={2} style={{marginTop:'2%'}}>
                        <Icon name='dropdown' style={{float:'right'}}/>
                      </Grid.Column>
                   </Grid.Row>
                 </Grid>
             </Accordion.Title>
               <Accordion.Content active={this.state.activeIndexAccordion === key}>
                 <Grid>
                   <Grid.Row>
                     <Grid.Column width={2} />
                     <Grid.Column width={5}>
                       <Header as='h5'>Classification</Header>
                         {item.classification}
                     </Grid.Column>
                     <Grid.Column width={3}>
                        <Header as='h5'>Location</Header>
                        {item.location}
                     </Grid.Column>
                     <Grid.Column width={4}>
                       <Header as='h5'>Date</Header>
                       {item.date}
                     </Grid.Column>
                     <Grid.Column width={2} style={{marginTop:'3%'}}>
                       <label >Edit</label>
                     </Grid.Column>
                   </Grid.Row>
                 </Grid>
               </Accordion.Content>
             </Accordion>
          </Grid.Column>
         </Grid.Row>
 );

    })
  )
}

  render()
  {
    const { activeItem , activeIndexAccordion } = this.state;
    return(
      <div>
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
              <Grid.Row>
                <Grid.Column width={16}>
                  <div>
                  <Menu pointing secondary style={{fontSize:'12px'}}>
                    <Menu.Item name='Yell.com (13)' active={activeItem ==='Yell.com (13)' } onClick={this.handleItemClick.bind(this,0)} />
                    <Menu.Item name='connect (1)' active={activeItem === 'connect (1)'} onClick={this.handleItemClick.bind(this,1)} />
                    <Menu.Item name='Reputation (2)' active={activeItem === 'Reputation (2)'} onClick={this.handleItemClick.bind(this,2)} />
                    <Menu.Item name='Freelistings (5)' active={activeItem === 'Freelistings (5)'} onClick={this.handleItemClick.bind(this,3)} />
                  </Menu>
                  <center><Header as={'h4'}>Performance on Yell.Com</Header></center>
                  <SwipeableViews index={this.state.index}>
                    <div style={{overflow:'hidden'}}>
                      <SwipeableViews>
                        <div style={{overflow:'hidden'}}>
                          <Charts graphData={Graph1Data} heading={'Calls'} count={542} icon={'mobile'} color={['#0083CA']} width={300} height={180}/>
                        </div>
                        <div style={{overflow:'hidden'}}>
                          <Charts graphData={Graph2Data} heading={'Clicks'} count={265} icon={'pointing up'} color={['#ed9147']} width={300} height={180}/>
                        </div>
                        <div style={{overflow:'hidden'}}>
                          <Charts graphData={Graph3Data} heading={'Activities'} count={561} icon={'cubes'} color={['#269e1e']} width={300} height={180}/>
                        </div>
                        <div style={{overflow:'hidden'}}>
                          <Charts graphData={Graph4Data} heading={'Impression'} count={26010} icon={'eye'} color={['#e0c10f']} width={300} height={180}/>
                        </div>
                      </SwipeableViews>
                      <Grid>
                        <Grid.Row style={{backgroundColor:'#D7DADC',marginTop:'5%'}}>
                          <Grid.Column width={2} />
                          <Grid.Column width={5}>
                            <Header as={'h5'}>Advert Name</Header>
                          </Grid.Column>
                          <Grid.Column width={4}>
                            <Header as={'h5'}>Order Number/Line</Header>
                          </Grid.Column>
                          <Grid.Column width={3}>
                            <Header as={'h5'}>Status</Header>
                          </Grid.Column>
                          <Grid.Column width={2} />
                        </Grid.Row>
                           {this.renderTableData()}
                      </Grid>
                    </div>
                    <div style={{overflow:'hidden'}}>
                      Connect
                    </div>
                    <div style={{overflow:'hidden'}}>
                      Reputation
                    </div>
                    <div style={{overflow:'hidden'}}>
                      Freelistings
                   </div>
                  </SwipeableViews>
                    </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>

          </Sidebar.Pusher>
        </Sidebar.Pushable>
         <DashboardFooter />
       </div>
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
